export const fromTmstpToTime = (timestamp: number) =>
    new Date(timestamp).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    });
