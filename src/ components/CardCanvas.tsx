import React, { useEffect, useRef, useState } from "react";
import { CardState } from "../types/types";

interface Props {
  cardState: CardState;
}

const CardCanvas: React.FC<Props> = ({ cardState }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const profileImgRef = useRef<HTMLImageElement | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (ctx && imageLoaded) {
      drawCard(ctx, cardState, profileImgRef.current);
    }
  }, [cardState, imageLoaded]);

  useEffect(() => {
    const profileImg = new Image();
    profileImg.src = "/profile.png";
    profileImg.onload = () => {
      profileImgRef.current = profileImg;
      setImageLoaded(true);
    };
  }, []);

  const font = "Poppins"; // Define the font family constant

  const getFontString = (row: keyof CardState) => {
    const fontSize = cardState[row].fontSize; // Access the fontSize property dynamically
    return `${fontSize}px ${font}`;
  };

  const drawCard = (ctx: CanvasRenderingContext2D, state: CardState, profileImg: HTMLImageElement | null) => {
    if (!ctx) return;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Draw card preview
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Draw ID
    if (state.id.display) {
      ctx.fillStyle = state.id.color || "#000";
      ctx.font = getFontString("id");
      ctx.fillText(state.id.value, state.id.xPosition, state.id.yPosition);
    }

    // Draw Name
    if (state.name.display) {
      ctx.fillStyle = state.name.color || "#000";
      ctx.font = getFontString("name");
      ctx.fillText(state.name.value, state.name.xPosition, state.name.yPosition);
    }

    // Draw Date
    if (state.date.display) {
      ctx.fillStyle = state.date.color || "#000";
      ctx.font = getFontString("date");
      ctx.fillText(state.date.value, state.date.xPosition, state.date.yPosition);
    }

    // Draw Points
    if (state.points.display) {
      ctx.fillStyle = state.points.color || "#000";
      ctx.font = getFontString("points");
      ctx.fillText(state.points.value, state.points.xPosition, state.points.yPosition);
    }

    // Draw Profile Icon
    if (profileImg) {
      ctx.drawImage(profileImg, 100, 90, 150, 150);
    }
  };

  return <canvas ref={canvasRef} width='600' height='315'></canvas>;
};

export default CardCanvas;
