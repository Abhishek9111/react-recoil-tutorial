import { atom, selector } from "recoil";

export const countAtom = atom({
  key: "countAtom",
  default: 0,
});

//selectors

export const evenSelector = selector({
  key: "evenSelector",
  //{get} is a prop && get before that is a key
  get: ({ get }) => {
    const count = get(countAtom);
    return count % 2;
  },
});
