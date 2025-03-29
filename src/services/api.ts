const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchCaseSummary = async () => {
  await delay(1000);
  return { active: 12, pending: 5, closed: 20 };
};

export const fetchRecentDocuments = async () => {
  await delay(1000);
  return [
    { name: "Contract_v2.docx", version: "v2" },
    { name: "LegalBrief_final.pdf", version: "final" },
    { name: "CaseNotes_23.doc", version: "23" },
  ];
};

export const fetchTimeTracking = async () => {
  await delay(1000);
  return [
    { attorney: "John Doe", hours: 20 },
    { attorney: "Jane Smith", hours: 15 },
  ];
};
