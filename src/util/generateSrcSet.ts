export default function generateSrcSet(path: string, type: string, unit: string) {
  const brakePoints = [200, 369, 490, 603, 698, 773, 851, 919, 996, 1024];
  
  return brakePoints.map((brakePoint) => {
    return `${path}/${brakePoint}.${type}  ${brakePoint}${unit}`;
  }).join(",\n");
}