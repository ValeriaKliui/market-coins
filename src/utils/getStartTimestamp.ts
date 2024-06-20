export const getStartTimestamp = (hoursAmount: number) => {
    return Date.now() - hoursAmount * 60 * 60 * 1000;
};
