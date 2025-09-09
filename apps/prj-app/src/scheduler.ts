// import cron from "node-cron";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// /**
//  * Update event stages based on current date.
//  */
// export async function updateEventStages() {
//   const now = new Date();

//   try {
//     console.log("Checking events for 'event ongoing' and 'event end' stages...");

//     // Handle "event ongoing" (startDate <= now < endDate)
//     const ongoingEvents = await prisma.event.findMany({
//       where: {
//         startDate: { lte: now },
//         endDate: { gte: now },
//       },
//     });

//     for (const event of ongoingEvents) {
//       console.log(`Creating 'event ongoing' stage for Event ID: ${event.id}`);
//       await prisma.stage.create({
//         data: {
//           name: "event ongoing",
//           createdAt: now,
//           events: {
//             connect: { id: event.id }, // Link to the event
//           },
//         },
//       });
//     }

//     // Handle "event end" (endDate <= now)
//     const endedEvents = await prisma.event.findMany({
//       where: {
//         endDate: { lte: now },
//       },
//     });

//     for (const event of endedEvents) {
//       console.log(`Creating 'event end' stage for Event ID: ${event.id}`);
//       await prisma.stage.create({
//         data: {
//           name: "event end",
//           createdAt: now,
//           events: {
//             connect: { id: event.id }, // Link to the event
//           },
//         },
//       });
//     }

//     console.log("Event stages processed successfully.");
//   } catch (error) {
//     console.error("Error processing event stages:", error);
//   }
// }

// // Schedule the task to run daily at midnight
// cron.schedule("0 0 * * *", async () => {
//   console.log("Scheduled task triggered.");
//   await updateEventStages();
// });

// console.log("Scheduler initialized and scheduled.");
