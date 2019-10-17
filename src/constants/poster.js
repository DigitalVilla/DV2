import img_sm from "../images/nebula-sm.jpg"
import img_md from "../images/nebula-md.jpg"
import img_lg from "../images/nebula-lg.jpg"
import img_4k from "../images/nebula.jpg"
import isMedia from "../utils/isMedia"

 let poster = isMedia('phone') ? img_sm : isMedia('tablet') ? img_md
		: isMedia('2kUp') ? img_4k : img_lg;

// export default function getPoster() {
//     return poster;
// }
export default poster;
