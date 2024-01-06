import { useEffect, useState } from "react";
import { getPermissionsFromToken } from "../contexts/AuthProvider/util";

export function Home() {
  const [menuItems, setMenuItens] = useState<string[] | null>([]);
  useEffect(() => {
    const permissions = getPermissionsFromToken();

    console.log("Permissões do usuário:", permissions);
    setMenuItens(permissions);
  }, []);

  return (
    <ul>
      {menuItems?.map((item, index) => (
        <li key={index}>
          <a href={""}>{item}</a>
        </li>
      ))}
    </ul>
  );
}
