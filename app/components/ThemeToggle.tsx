import { useEffect, useState } from "react";
import { LuMoon, LuSun, LuSunrise } from "react-icons/lu";

const STORAGE_KEY = "theme";
const LOCATION_KEY = "theme-location";
const THEME_CHANGE = "theme-change";

// NOAA general solar position equations. The apparent sunrise/sunset
// threshold includes atmospheric refraction and the radius of the sun.
function isNight(now: Date, location: [number, number] | null) {
	if (!location) return now.getHours() < 6 || now.getHours() >= 18;

	const [latitude, longitude] = location;
	const year = now.getUTCFullYear();
	const yearStart = Date.UTC(year, 0, 1);
	const fraction =
		(now.getTime() - yearStart) / (Date.UTC(year + 1, 0, 1) - yearStart);
	const angle = 2 * Math.PI * fraction;
	const equationOfTime =
		229.18 *
		(0.000075 +
			0.001868 * Math.cos(angle) -
			0.032077 * Math.sin(angle) -
			0.014615 * Math.cos(2 * angle) -
			0.040849 * Math.sin(2 * angle));
	const declination =
		0.006918 -
		0.399912 * Math.cos(angle) +
		0.070257 * Math.sin(angle) -
		0.006758 * Math.cos(2 * angle) +
		0.000907 * Math.sin(2 * angle) -
		0.002697 * Math.cos(3 * angle) +
		0.00148 * Math.sin(3 * angle);
	const radians = Math.PI / 180;
	const utcMinutes = now.getUTCHours() * 60 + now.getUTCMinutes();
	const hourAngle =
		((utcMinutes + equationOfTime + 4 * longitude - 720) * radians) / 4;
	const latitudeRadians = latitude * radians;
	const cosineZenith =
		Math.sin(latitudeRadians) * Math.sin(declination) +
		Math.cos(latitudeRadians) * Math.cos(declination) * Math.cos(hourAngle);

	return cosineZenith < Math.cos(90.833 * radians);
}

function getLocation(key: string): [number, number] | null {
	try {
		const location = JSON.parse(localStorage.getItem(key) ?? "null");
		if (
			Array.isArray(location) &&
			location.length === 2 &&
			Number.isFinite(location[0]) &&
			Math.abs(location[0]) <= 90 &&
			Number.isFinite(location[1]) &&
			Math.abs(location[1]) <= 180
		)
			return [location[0], location[1]];
	} catch {}
	return null;
}

function getPreference(key: string) {
	try {
		const stored = localStorage.getItem(key);
		if (stored === "light" || stored === "dark") return stored;
	} catch {}
	return "auto";
}

function applyTheme(isDark: boolean) {
	document.documentElement.classList.toggle("dark", isDark);
	document.documentElement.style.colorScheme = isDark ? "dark" : "light";
}

let sessionPreference: "auto" | "light" | "dark" | undefined;
let sessionLocation: [number, number] | null = null;

function setPreference(preference: "auto" | "light" | "dark") {
	sessionPreference = undefined;
	try {
		localStorage.setItem(STORAGE_KEY, preference);
	} catch {
		sessionPreference = preference;
	}
	window.dispatchEvent(new Event(THEME_CHANGE));
}

export function toggleTheme() {
	setPreference(
		document.documentElement.classList.contains("dark") ? "light" : "dark",
	);
}

export const themeScript = `
(function () {
  const preference = (${getPreference.toString()})(${JSON.stringify(STORAGE_KEY)});
  const location = (${getLocation.toString()})(${JSON.stringify(LOCATION_KEY)});
  const dark = preference === "auto"
    ? (${isNight.toString()})(new Date(), location)
    : preference === "dark";
  (${applyTheme.toString()})(dark);
})();
`;

export function ThemeToggle() {
	const [automatic, setAutomatic] = useState(true);

	useEffect(() => {
		let timer: number;
		const refresh = () => {
			window.clearTimeout(timer);
			const preference = sessionPreference ?? getPreference(STORAGE_KEY);
			setAutomatic(preference === "auto");
			if (preference !== "auto") {
				applyTheme(preference === "dark");
				return;
			}
			const now = new Date();
			applyTheme(isNight(now, sessionLocation ?? getLocation(LOCATION_KEY)));
			timer = window.setTimeout(refresh, 60_000 - (now.getTime() % 60_000));
		};

		refresh();
		window.addEventListener(THEME_CHANGE, refresh);
		window.addEventListener("storage", refresh);
		document.addEventListener("visibilitychange", refresh);
		return () => {
			window.clearTimeout(timer);
			window.removeEventListener(THEME_CHANGE, refresh);
			window.removeEventListener("storage", refresh);
			document.removeEventListener("visibilitychange", refresh);
		};
	}, []);

	function enableAutomatic() {
		setPreference("auto");
		navigator.geolocation?.getCurrentPosition(
			({ coords }) => {
				// City-level precision is sufficient for sunrise and sunset.
				const location: [number, number] = [
					Math.round(coords.latitude * 10) / 10,
					Math.round(coords.longitude * 10) / 10,
				];
				try {
					localStorage.setItem(LOCATION_KEY, JSON.stringify(location));
					sessionLocation = null;
				} catch {
					sessionLocation = location;
				}
				window.dispatchEvent(new Event(THEME_CHANGE));
			},
			() => {},
			{ maximumAge: 300_000, timeout: 10_000 },
		);
	}

	const buttonClass =
		"relative z-40 cursor-pointer rounded-md p-2 sm:p-1 transition-colors hover:bg-accent hover:text-accent-foreground";

	return (
		<div className="flex items-center gap-1">
			<button
				type="button"
				onClick={enableAutomatic}
				aria-label="Automatic theme by sunrise and sunset"
				aria-pressed={automatic}
				title="Use sunrise and sunset (uses location if allowed)"
				className={`${buttonClass} aria-pressed:bg-accent aria-pressed:text-accent-foreground`}
			>
				<LuSunrise aria-hidden="true" />
			</button>
			<button
				type="button"
				onClick={toggleTheme}
				aria-label="toggle dark mode"
				title="toggle dark mode"
				className={buttonClass}
			>
				<LuSun className="hidden dark:block" />
				<LuMoon className="block dark:hidden" />
			</button>
		</div>
	);
}
