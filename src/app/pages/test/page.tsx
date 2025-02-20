"use client";
import { Button } from "@heroui/react";
import { data, dataGrupos } from "./data";
import { useState } from "react";

const Test = () => {
  const [dataFinal, setDataFinal] = useState<{ numero: number; bro: string }[]>(
    []
  );
  const dataPrincipal = data;
  const grupos = dataGrupos;
  const groupRandomNumbers = () => {
    const numbers = Array.from({ length: 49 }, (_, i) => i + 1);

    // Mezclar los números aleatoriamente usando el algoritmo de Fisher-Yates
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    // Agrupar en subconjuntos de 5
    const groups: number[][] = [];
    for (let i = 0; i < numbers.length; i += 5) {
      groups.push(numbers.slice(i, i + 5));
    }
    console.log("groups => ", groups);
    return groups;
  };
  const renderItem = () => {
    const gruoFinal: { numero: number; bro: string }[] = [];
    for (let i = 0; i < grupos.length; i++) {
      for (let j = 0; j < grupos[i].length; j++) {
        const temp = dataPrincipal.find((item) => grupos[i][j] === item.id);
        if (temp) {
          gruoFinal.push({ numero: i + 1, bro: temp.nombre });
          break;
        }
      }
    }

    console.log("gruoFinal => ", gruoFinal);

    return <div>final</div>;
  };
  return (
    <div className="w-[400px] h-[auto] grid grid-col-2">({renderItem()})</div>
  );
};

export default Test;
