import { redirect } from "react-router";

export function loader() {
  return redirect("/about", 301);
}
