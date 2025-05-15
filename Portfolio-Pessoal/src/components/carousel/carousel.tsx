import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import type { PanInfo } from "framer-motion";
import ImgCarrinho from "../../assets/projetos/carrinho/carrinho.png";

// replace icons with your own if needed
import {
    FiCircle,
    FiCoffee,
    FiAirplay,
    FiShoppingCart,
} from "react-icons/fi";

export interface CarouselItem {
    title: string;
    description: string;
    id: number;
    icon: JSX.Element;
    imageUrl?: string;
    buttons?: {
        label: string;
        icon?: JSX.Element;
        onClick: () => void;
        variant?: "primary" | "secondary";
    }[];
}

export interface CarouselProps {
    items?: CarouselItem[];
    baseWidth?: number;
    autoplay?: boolean;
    autoplayDelay?: number;
    pauseOnHover?: boolean;
    loop?: boolean;
    round?: boolean;
}

const DEFAULT_ITEMS: CarouselItem[] = [
    {
        title: "Carrinho de compras",
        description:
            "Projeto de carrinho de compras funcional feito com HTML, CSS e JavaScript puro. Possui interface responsiva, permite gerenciar produtos no carrinho e salva os dados em tempo real com Firebase. Ideal para quem está aprendendo e-commerce sem frameworks.",
        id: 1,
        icon: <FiShoppingCart className="h-[16px] w-[16px] text-white" />,
        imageUrl: ImgCarrinho,
        buttons: [
            {
                label: "Repositório",
                icon: <FiCoffee className="ml-2 inline-block h-4 w-4" />,
                onClick: () =>
                    window.open("https://github.com/VictorVaz-Dev/Carrinho", "_blank"),
                variant: "primary",
            },
            {
                label: "Ver site",
                icon: <FiAirplay className="ml-2 inline-block h-4 w-4" />,
                onClick: () =>
                    window.open("https://greenfarm-nu.vercel.app/index.html", "_blank"),
                variant: "secondary",
            },
        ],
    },
    {
        title: "Animations",
        description: "Smooth animations for your projects.",
        id: 2,
        icon: <FiCircle className="h-[16px] w-[16px] text-white" />,
        imageUrl: "/images/text-animations.jpg",
        buttons: [
            {
                label: "Learn More",
                icon: <FiCoffee className="ml-2 inline-block h-4 w-4" />,
                onClick: () => alert("Learn more clicked"),
                variant: "primary",
            },
            {
                label: "Demo",
                icon: <FiAirplay className="ml-2 inline-block h-4 w-4" />,
                onClick: () => alert("Demo clicked"),
                variant: "secondary",
            },
        ],
    },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
    items = DEFAULT_ITEMS,
    baseWidth = 400,
    autoplay = false,
    autoplayDelay = 3000,
    pauseOnHover = false,
    loop = false,
    round = false,
}: CarouselProps): JSX.Element {
    const containerPadding = 16;
    const itemWidth = baseWidth - containerPadding * 2;
    const trackItemOffset = itemWidth + GAP;

    const carouselItems = loop ? [...items, items[0]] : items;
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const x = useMotionValue(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isResetting, setIsResetting] = useState<boolean>(false);

    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (pauseOnHover && containerRef.current) {
            const container = containerRef.current;
            const handleMouseEnter = () => setIsHovered(true);
            const handleMouseLeave = () => setIsHovered(false);
            container.addEventListener("mouseenter", handleMouseEnter);
            container.addEventListener("mouseleave", handleMouseLeave);
            return () => {
                container.removeEventListener("mouseenter", handleMouseEnter);
                container.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, [pauseOnHover]);

    useEffect(() => {
        if (autoplay && (!pauseOnHover || !isHovered)) {
            const timer = setInterval(() => {
                setCurrentIndex((prev) => {
                    if (prev === items.length - 1 && loop) {
                        return prev + 1; // Animate to clone.
                    }
                    if (prev === carouselItems.length - 1) {
                        return loop ? 0 : prev;
                    }
                    return prev + 1;
                });
            }, autoplayDelay);
            return () => clearInterval(timer);
        }
    }, [
        autoplay,
        autoplayDelay,
        isHovered,
        loop,
        items.length,
        carouselItems.length,
        pauseOnHover,
    ]);

    const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

    const handleAnimationComplete = () => {
        if (loop && currentIndex === carouselItems.length - 1) {
            setIsResetting(true);
            x.set(0);
            setCurrentIndex(0);
            setTimeout(() => setIsResetting(false), 50);
        }
    };

    const handleDragEnd = (
        _: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ): void => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;

        if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
            // Avançar
            setCurrentIndex((prev) => {
                const next = prev + 1;
                if (loop) {
                    return next >= carouselItems.length ? 0 : next;
                }
                return Math.min(next, carouselItems.length - 1);
            });
        } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
            // Voltar
            setCurrentIndex((prev) => {
                const next = prev - 1;
                if (loop) {
                    return next < 0 ? carouselItems.length - 1 : next;
                }
                return Math.max(next, 0);
            });
        }
    };

    useEffect(() => {
        if (autoplay && (!pauseOnHover || !isHovered)) {
            const timer = setInterval(() => {
                setCurrentIndex((prev) => {
                    const next = prev + 1;
                    if (loop) {
                        if (next === carouselItems.length) {
                            return 0;
                        }
                        return next;
                    }
                    return Math.min(next, carouselItems.length - 1);
                });
            }, autoplayDelay);
            return () => clearInterval(timer);
        }
    }, [autoplay, autoplayDelay, isHovered, loop, pauseOnHover, carouselItems.length]);


    const dragProps = loop
        ? {}
        : {
            dragConstraints: {
                left: -trackItemOffset * (carouselItems.length - 1),
                right: 0,
            },
        };

    return (
        <div
            ref={containerRef}
            className={`relative bg-black mt-[4vh] overflow-hidden p-4 ${round
                    ? "rounded-full border border-white"
                    : "rounded-[24px] border border-[#222]"
                }`}
            style={{
                width: `${baseWidth}px`,
                ...(round && { height: `${baseWidth}px` }),
            }}
        >
            <motion.div
                className="flex"
                drag="x"
                {...dragProps}
                style={{
                    width: itemWidth,
                    gap: `${GAP}px`,
                    perspective: 1000,
                    perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
                    x,
                }}
                onDragEnd={handleDragEnd}
                animate={{ x: -(currentIndex * trackItemOffset) }}
                transition={effectiveTransition}
                onAnimationComplete={handleAnimationComplete}
            >
                {carouselItems.map((item, index) => {
                    const range = [
                        -(index + 1) * trackItemOffset,
                        -index * trackItemOffset,
                        -(index - 1) * trackItemOffset,
                    ];
                    const outputRange = [90, 0, -90];
                    const rotateY = useTransform(x, range, outputRange, { clamp: false });

                    return (
                        <motion.div
                            key={index}
                            className={`relative shrink-0 flex flex-col ${round
                                    ? "items-center justify-center text-center bg-[#060606] border-0"
                                    : "bg-[#222] border border-[#222] rounded-[12px]"
                                } overflow-hidden cursor-grab active:cursor-grabbing`}
                            style={{
                                width: itemWidth,
                                height: round ? itemWidth : 500,
                                rotateY: rotateY,
                                ...(round && { borderRadius: "50%" }),
                            }}
                            transition={effectiveTransition}
                        >
                            {/* Imagem */}
                            {!round && item.imageUrl && (
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="h-[160px] w-full object-cover"
                                />
                            )}

                            <div className="p-5 flex flex-col justify-between flex-1">
                                <div>
                                    <div className="flex items-center gap-2 mb-2 mt-[10px]">
                                        <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#060606]">
                                            {item.icon}
                                        </span>
                                        <h3 className="font-black text-white text-xl">{item.title}</h3>
                                    </div>
                                    <p className="text-white text-base">{item.description}</p>
                                </div>

                                {item.buttons?.length && (
                                    <div className="mt-4 flex gap-2">
                                        {item.buttons.map((btn, i) => (
                                            <button
                                                key={i}
                                                onClick={btn.onClick}
                                                className={`px-4 py-2 text-sm rounded font-medium flex items-center justify-center ${btn.variant === "secondary"
                                                        ? "bg-white text-black font-bold hover:cursor-pointer"
                                                        : "bg-cyan-500 text-white font-bold hover:cursor-pointer"
                                                    }`}
                                            >
                                                {btn.label}
                                                {btn.icon}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>

            <div
                className={`flex w-full justify-center ${round ? "absolute z-20 bottom-12 left-1/2 -translate-x-1/2" : ""
                    }`}
            >
                <div className="mt-4 flex w-[150px] justify-between px-8">
                    {items.map((_, index) => (
                        <motion.div
                            key={index}
                            className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${currentIndex % items.length === index
                                    ? round
                                        ? "bg-white"
                                        : "bg-[#333333]"
                                    : round
                                        ? "bg-[#555]"
                                        : "bg-[rgba(51,51,51,0.4)]"
                                }`}
                            animate={{
                                scale: currentIndex % items.length === index ? 1.2 : 1,
                            }}
                            onClick={() => setCurrentIndex(index)}
                            transition={{ duration: 0.15 }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
