export interface CardState {
  name: CardItem;
  id: CardItem;
  date: CardItem;
  points: CardItem;
}

export interface CardItem {
  value: string;
  display: boolean;
  fontSize: number;
  color: string;
  xPosition: number;
  yPosition: number;
}
