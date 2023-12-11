export const getUnmaskedNumber = (maskedNum: string): string => {
    return maskedNum.replaceAll(/-|_/g, "");
}