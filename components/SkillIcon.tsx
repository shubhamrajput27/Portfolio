import React from 'react';

// Tech Icons
import ReactIcon from './icons/tech/ReactIcon';
import TypeScriptIcon from './icons/tech/TypeScriptIcon';
import JavaScriptIcon from './icons/tech/JavaScriptIcon';
import NextjsIcon from './icons/tech/NextjsIcon';
import TailwindCssIcon from './icons/tech/TailwindCssIcon';
import Html5Icon from './icons/tech/Html5Icon';
import Css3Icon from './icons/tech/Css3Icon';
import SassIcon from './icons/tech/SassIcon';
import ReduxIcon from './icons/tech/ReduxIcon';
import FramerMotionIcon from './icons/tech/FramerMotionIcon';
import NodejsIcon from './icons/tech/NodejsIcon';
import ExpressIcon from './icons/tech/ExpressIcon';
import MongoDbIcon from './icons/tech/MongoDbIcon';
import FirebaseIcon from './icons/tech/FirebaseIcon';
import GraphQLIcon from './icons/tech/GraphQLIcon';
import GithubIcon from './icons/tech/GithubIcon';
import VercelIcon from './icons/tech/VercelIcon';
import RenderIcon from './icons/tech/RenderIcon';
import DockerIcon from './icons/tech/DockerIcon';
import JestIcon from './icons/tech/JestIcon';
import WebpackIcon from './icons/tech/WebpackIcon';
import FigmaIcon from './icons/tech/FigmaIcon';

// Fallback Icon
import CodeIcon from './icons/CodeIcon';

interface SkillIconProps extends React.SVGProps<SVGSVGElement> {
  iconId?: string;
}

const iconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  react: ReactIcon,
  typescript: TypeScriptIcon,
  javascript: JavaScriptIcon,
  nextjs: NextjsIcon,
  tailwindcss: TailwindCssIcon,
  html5: Html5Icon,
  css3: Css3Icon,
  sass: SassIcon,
  redux: ReduxIcon,
  framer: FramerMotionIcon,
  nodejs: NodejsIcon,
  express: ExpressIcon,
  mongodb: MongoDbIcon,
  firebase: FirebaseIcon,
  graphql: GraphQLIcon,
  github: GithubIcon,
  vercel: VercelIcon,
  render: RenderIcon,
  docker: DockerIcon,
  jest: JestIcon,
  webpack: WebpackIcon,
  figma: FigmaIcon,
};

const SkillIcon: React.FC<SkillIconProps> = ({ iconId, ...props }) => {
  // Fix: Handle the case where the iconId `htmlcss` from older data is now split.
  // Default to the HTML5 icon for backward compatibility if needed, though data is updated.
  const resolvedIconId = iconId === 'htmlcss' ? 'html5' : iconId;
  const IconComponent = resolvedIconId ? iconMap[resolvedIconId] : null;

  if (IconComponent) {
    return <IconComponent {...props} />;
  }

  return <CodeIcon {...props} />;
};

export default SkillIcon;