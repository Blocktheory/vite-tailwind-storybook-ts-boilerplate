import "tailwindcss/tailwind.css";

import { createRoot } from "react-dom/client";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

root.render(<div>Hello World</div>);
