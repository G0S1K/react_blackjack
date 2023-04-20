import React, { ReactNode, createContext, useContext, useState } from "react";

interface INodes {
	children: React.ReactNode;
}

export interface IPointsContext {
	points: number;
	addPoints: Function;
	subtractPoints: Function;
	getPoints: Function;
};

let defaultValue: IPointsContext = {
    points: 500,
	addPoints: (count: number) => {},
	subtractPoints: (count: number) => {},
	getPoints: () => {},
} 

export const PointsContext = createContext(defaultValue);

const usePointsContext = () => useContext(PointsContext);


const PointsProvider: React.FC<INodes> = ({ children }) => {
	const [points, setPoints] = useState<number>(500);

	const addPoints = (count: number) => setPoints(points + count);

	const subtractPoints = (count: number) => setPoints(points - count);

	const getPoints = () => points;

	return (
		<PointsContext.Provider
			value={{ points, addPoints, subtractPoints, getPoints }}
		>
			{children}
		</PointsContext.Provider>
	);
};

export {PointsProvider, usePointsContext};
