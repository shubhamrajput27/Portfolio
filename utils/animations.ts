// Framer Motion Animation Variants and Utilities

export const pageTransition = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: "easeIn"
    }
  }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const slideUp = {
  hidden: {
    y: 50,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const slideInLeft = {
  hidden: {
    x: -50,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const slideInRight = {
  hidden: {
    x: 50,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const scaleIn = {
  hidden: {
    scale: 0,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "backOut"
    }
  }
};

export const fadeIn = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export const rotateIn = {
  hidden: {
    rotate: -180,
    opacity: 0
  },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const hoverScale = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.95
  }
};

export const hoverFloat = {
  hover: {
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

export const bounce = {
  hover: {
    y: [0, -10, 0],
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

export const modalBackdrop = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};

export const modalContent = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "backOut"
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 50,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

export const cardHover = {
  hover: {
    y: -8,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export const textGradient = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "linear"
  }
};

// Utility function for creating custom stagger animations
export const createStagger = (staggerDelay = 0.1, childDelay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: childDelay
    }
  }
});

// Utility function for creating slide animations with custom direction
export const createSlide = (direction: 'up' | 'down' | 'left' | 'right', distance = 50) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: distance };
      case 'down': return { y: -distance };
      case 'left': return { x: distance };
      case 'right': return { x: -distance };
      default: return { y: distance };
    }
  };

  return {
    hidden: {
      ...getInitialPosition(),
      opacity: 0
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
};

// Utility function for creating scale animations
export const createScale = (initialScale = 0, duration = 0.4) => ({
  hidden: {
    scale: initialScale,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration,
      ease: "backOut"
    }
  }
});