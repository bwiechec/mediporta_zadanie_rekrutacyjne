const dummyTags = {
  items: [
    {
      hasSynonyms: false,
      isModeratorOnly: false,
      isRequired: false,
      count: 7,
      name: "zwcad",
    },
    {
      hasSynonyms: false,
      isModeratorOnly: false,
      isRequired: false,
      count: 35,
      name: "z-wave",
    },
    {
      hasSynonyms: false,
      isModeratorOnly: false,
      isRequired: false,
      count: 8,
      name: "zuul-testing",
    },
    {
      hasSynonyms: false,
      isModeratorOnly: false,
      isRequired: false,
      count: 16,
      name: "zuul-ci",
    },
    {
      hasSynonyms: false,
      isModeratorOnly: false,
      isRequired: false,
      count: 303,
      name: "zustand",
    },
    {
      hasSynonyms: false,
      isModeratorOnly: false,
      isRequired: false,
      count: 6,
      name: "zurmocrm",
    },
    {
      hasSynonyms: false,
      isModeratorOnly: false,
      isRequired: false,
      count: 56,
      name: "zurb-reveal",
    },
  ],
};

export const dummyTagData = {
  ...dummyTags,
  hasMore: true,
  quotaMax: 300,
  quotaRemaining: 244,
};

export const dummyTagWithoutData = {
  items: [],
  hasMore: true,
  quotaMax: 300,
  quotaRemaining: 244,
};
