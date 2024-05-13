import React from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { usePathname } from "next/navigation";
import { profileMenuArr } from "../common/constant";

function Sidebar() {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const routeHandler = async (path) => {
    // alert("logout");
    // await
    router.push(path);
    // signOut().then((e) => console.log(e));
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" sx={{ backgroundColor: "red" }}>
              {session?.user?.name[0]}
            </Avatar>
          }
          title="Hello"
          subheader={session?.user?.name}
        />
      </Card>
      <div className="menu_div">
        {profileMenuArr.map((e) => {
          return (
            <>
              <p
                key={e.menu}
                className={`
                  ${pathname === e.path && "profile_main_menu_active"}
                     profile_main_menu
                `}
                onClick={() => routeHandler(e.path)}>
                <span>{e.icon}</span>
                <b className="mx-3">{e.menu}</b>
              </p>
              {e?.subMenuArr?.map((a) => {
                return (
                  <p
                    key={a.menu}
                    className={`
                  ${pathname === a.path && "profile_sub_menu_active"}
                  profile_sub_menu
                `}
                    onClick={() => routeHandler(a.path)}>
                    {a.menu}
                  </p>
                );
              })}
            </>
          );
        })}
      </div>
    </>
  );
}

export default Sidebar;
