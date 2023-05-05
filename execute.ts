const executeSources = async (sourceName: string) => {
  const importSource = await import(`./source/${sourceName}`);

  const getSource = importSource.getSource();
};

// execute sourceA and sourceB
executeSources("sourceA");

export { executeSources };
