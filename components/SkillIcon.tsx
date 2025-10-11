import React from 'react';

// Tech Icons
import ReactIcon from './icons/tech/ReactIcon';
import TypeScriptIcon from './icons/tech/TypeScriptIcon';
import JavaScriptIcon from './icons/tech/JavaScriptIcon';
import NextjsIcon from './icons/tech/NextjsIcon';
import NodejsIcon from './icons/tech/NodejsIcon';
import TailwindCssIcon from './icons/tech/TailwindCssIcon';
import Html5Icon from './icons/tech/Html5Icon';
import Css3Icon from './icons/tech/Css3Icon';
import SassIcon from './icons/tech/SassIcon';
import ReduxIcon from './icons/tech/ReduxIcon';
import FramerMotionIcon from './icons/tech/FramerMotionIcon';
import ExpressIcon from './icons/tech/ExpressIcon';
import FirebaseIcon from './icons/tech/FirebaseIcon';
import GraphQLIcon from './icons/tech/GraphQLIcon';
import GithubIcon from './icons/tech/GithubIcon';
import GitIcon from './icons/tech/GitIcon';
import VercelIcon from './icons/tech/VercelIcon';
import RenderIcon from './icons/tech/RenderIcon';
import DockerIcon from './icons/tech/DockerIcon';
import JestIcon from './icons/tech/JestIcon';
import WebpackIcon from './icons/tech/WebpackIcon';
import FigmaIcon from './icons/tech/FigmaIcon';
import MySQLIcon from './icons/tech/MySQLIcon';
import JavaIcon from './icons/tech/JavaIcon';
import PythonIcon from './icons/tech/PythonIcon';
import CIcon from './icons/tech/CIcon';
import CppIcon from './icons/tech/CppIcon';
import MongoDBIcon from './icons/tech/MongoDBIcon';

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
  nodejs: NodejsIcon,
  tailwindcss: TailwindCssIcon,
  html5: Html5Icon,
  css3: Css3Icon,
  sass: SassIcon,
  redux: ReduxIcon,
  framer: FramerMotionIcon,
  express: ExpressIcon,
  firebase: FirebaseIcon,
  graphql: GraphQLIcon,
  github: GithubIcon,
  git: GitIcon,
  vercel: VercelIcon,
  render: RenderIcon,
  docker: DockerIcon,
  jest: JestIcon,
  webpack: WebpackIcon,
  figma: FigmaIcon,
  mysql: MySQLIcon,
  java: JavaIcon,
  python: PythonIcon,
  c: CIcon,
  cpp: CppIcon,
  mongodb: MongoDBIcon,
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