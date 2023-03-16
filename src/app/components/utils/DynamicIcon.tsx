// type imports
import TIcon from "@/app/models/types/icon";
import {IconType as TIconType} from "react-icons";
// react-icons imports
import { FaRocket } from 'react-icons/fa';
import { GiSandsOfTime } from 'react-icons/gi';
import { MdLocalShipping } from 'react-icons/md';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

type IDynamicIcon = {
  iconName: TIcon,
  size?: string | number;
  color?: string;
}

export const DynamicIcon = (props: IDynamicIcon): JSX.Element  => {
  const IconComponent = getIcon(props.iconName);

  return <IconComponent size={props.size} color={props.color} /> 
}

export const getIcon = (iconName: TIcon): TIconType => {
  switch (iconName) {
    case 'fa-rocket':
      return FaRocket;
    case 'gi-sands-of-time':
      return GiSandsOfTime;
    case 'md-local-shipping':
      return MdLocalShipping;
    case 'ri-money-dollar-circle-line':
      return RiMoneyDollarCircleLine;
    default:
      return FaRocket;
  }
}

export default DynamicIcon;