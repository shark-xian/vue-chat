import InitData from "@/module/screen-short/main-entrance/InitData";
import { setSelectedClassName } from "@/module/screen-short/common-methords/SetSelectedClassName";

/**
 * 设置画笔大小
 * @param size
 * @param index
 * @param mouseEvent
 */
export function setBrushSize(
  size: string,
  index: number,
  mouseEvent: MouseEvent
) {
  const data = new InitData();
  // 为当前点击项添加选中时的class名
  setSelectedClassName(mouseEvent, index, true);
  let sizeNum = 2;
  switch (size) {
    case "smail":
      sizeNum = 2;
      break;
    case "medium":
      sizeNum = 5;
      break;
    case "big":
      sizeNum = 10;
      break;
  }
  data.setPenSize(sizeNum);
  return sizeNum;
}
