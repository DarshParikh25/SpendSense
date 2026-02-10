import * as Icons from "lucide-react";

const CategoryIcon = ({ name }) => {
  const Icon = Icons[name];

  return Icon ? <Icon /> : null;
};

export default CategoryIcon;
