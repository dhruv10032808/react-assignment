const sampleData = [
  {
    id: 1,
    patientName: "Patient 1",
    contact: "+91 7355015157",
    parent: "Jane Doe",
    immediateActions: [
      { action: "Vaccines", status: "overdue", date: "2024-01-01" },
      { action: "Follow-up", status: "pending", date: "2024-01-01" },
      { action: "Lab Tests", status: "pending", date: "2024-01-01" },
    ],
  },
  {
    id: 2,
    patientName: "Patient 2",
    contact: "+91 7355015999",
    parent: "John Doe",
    immediateActions: [
      { action: "Vaccines", status: "overdue", date: "2023-01-06" },
      { action: "Follow-up", status: "pending", date: "2024-12-01" },
      { action: "Lab Tests", status: "pending", date: "2025-01-05" },
    ],
  },
  {
    id: 3,
    patientName: "Patient 3",
    contact: "+91 7845355670",
    parent: "Michael",
    immediateActions: [
      { action: "Vaccines", status: "overdue", date: "2024-11-01" },
      { action: "Follow-up", status: "pending", date: "2024-04-19" },
      { action: "Lab Tests", status: "pending", date: "2023-01-01" },
    ],
  },
];

export default sampleData;
