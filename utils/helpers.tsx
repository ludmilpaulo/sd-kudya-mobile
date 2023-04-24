import { Alert } from "react-native";

export const getAllCartFoods = (items: any[]) => {
  let allFoods: any[] = [];
  const foodsData = items.map((x: { foods: any; }) => x.foods);
  foodsData.map((food: any[]) => {
    food.map((x: any) => {
      allFoods = [...allFoods, x];
    });
  });
  return allFoods;
};

export const getTotalCartItemPrice = (items: any[]) => {
  let allFoods: any[] = [];
  const foodsData = items.map((x: { foods: any; }) => x.foods);
  foodsData.map((food: any[]) => {
    food.map((x: any) => {
      allFoods = [...allFoods, x];
    });
  });
  return allFoods
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(1);
};