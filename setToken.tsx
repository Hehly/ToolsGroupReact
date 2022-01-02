import moment from "moment";
import { Cookies } from "react-cookie";

//返回tooken
export function get_token() {
  let lbtoken;
  try {
    lbtoken = {
      lb_token: /lb_token=([^&]+)/.exec(location.href)[1],
      from_url: true,
    };
  } catch (e) {
    lbtoken = { lb_token: new Cookies().get("lb_token"), from_url: false };
  }
  return lbtoken;
}
