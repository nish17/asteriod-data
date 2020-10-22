export function addIsMarkedProp(APIData) {
  return APIData.map((data) => ({ ...data, isMarked: false }));
}