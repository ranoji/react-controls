if (!mergedData[time]) {
            mergedData[time] = { fiveDays: 0, today: 0 };
        }

        if (day === "5days") {
            mergedData[time].fiveDays = volume;
        } else if (day === "today") {
            mergedData[time].today = volume;
        }
    });

    return Object.entries(mergedData).map(([time, { fiveDays, today }]) => [time, fiveDays, today]);
