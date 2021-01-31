import { getSelectedCalssName } from "@/module/screen-short/common-methords/GetSelectedCalssName";
import { getBrushSelectedName } from "@/module/screen-short/common-methords/GetBrushSelectedName";

/**
 * 为当前点击项添加选中时的class，移除其兄弟元素选中时的class
 * @param mouseEvent 需要进行操作的元素
 * @param index 当前点击项
 * @param isOption 是否为画笔选项
 */
export function setSelectedClassName(
  mouseEvent: any,
  index: number,
  isOption: boolean
) {
  // 获取当前点击项选中时的class名
  let className = getSelectedCalssName(index);
  if (isOption) {
    // 获取画笔选项选中时的对应的class
    className = getBrushSelectedName(index);
  }
  // 获取div下的所有子元素
  const nodes = mouseEvent.path[1].children;
  for (let i = 0; i < nodes.length; i++) {
    const item = nodes[i];
    // 如果工具栏中已经有选中的class则将其移除
    if (item.className.includes("active")) {
      item.classList.remove(item.classList[2]);
    }
  }
  // 给当前点击项添加选中时的class
  mouseEvent.target.className += " " + className;
}
