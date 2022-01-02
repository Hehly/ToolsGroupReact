// 设置cookie
import moment from "moment";
import { Cookies } from "react-cookie";

// 设置一天的cookie
export function set_cookies(token: string, account: string, expires: Date = moment().add(1, "days").toDate()) {
    if (account) new Cookies().set("account", account, { expires, path: "/" });
    new Cookies().set("lb_token", token, { expires, path: "/" });
  }