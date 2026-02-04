import type { IconType } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGhost,
  faDragon,
  faCat,
  faEye,
  faRobot,
  faShieldHalved,
  faBug,
  faMask
} from '@fortawesome/free-solid-svg-icons';

export const getCardColor = (type: IconType): string => {
  switch (type) {
    case 'blob': return 'bg-cyan-200 dark:bg-cyan-900';
    case 'horned-square': return 'bg-yellow-200 dark:bg-yellow-900';
    case 'orange-walker': return 'bg-orange-200 dark:bg-orange-900';
    case 'tall-one-eye': return 'bg-teal-200 dark:bg-teal-900';
    case 'purple-bag': return 'bg-purple-200 dark:bg-purple-900';
    case 'yellow-shield': return 'bg-indigo-200 dark:bg-indigo-900';
    case 'pink-jelly': return 'bg-pink-200 dark:bg-pink-900';
    case 'masked-square': return 'bg-emerald-200 dark:bg-emerald-900';
    default: return 'bg-gray-200 dark:bg-gray-800';
  }
};

const iconMap: Record<IconType, any> = {
  'blob': faGhost,
  'horned-square': faDragon,
  'orange-walker': faCat,
  'tall-one-eye': faEye,
  'purple-bag': faRobot,
  'yellow-shield': faShieldHalved,
  'pink-jelly': faBug,
  'masked-square': faMask
};

export const getIcon = (type: IconType, className: string = "w-32 h-32") => {
  return (
    <div className={`${className} flex items-center justify-center text-gray-700 dark:text-white/90`}>
      <FontAwesomeIcon icon={iconMap[type]} className="w-full h-full drop-shadow-sm" />
    </div>
  );
};