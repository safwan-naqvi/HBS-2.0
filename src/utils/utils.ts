export const formatData = (dateString: string): string => {
    const date = new Date(dateString).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    return date
}


/**
 * Truncates a description to the first 160 characters for SEO purposes.
 * Ensures the text does not cut off in the middle of a word.
 * 
 * @param description - The full description text to be truncated.
 * @returns A truncated string of the first 160 characters.
 */
export const truncateDescription = (description: string): string => {
    // Truncate the string to 160 characters without cutting words.
    if (description.length <= 160) return description;

    // Find the last space within the first 160 characters to avoid cutting a word.
    const truncated = description.substring(0, 160);
    const lastSpaceIndex = truncated.lastIndexOf(' ');

    return lastSpaceIndex === -1 ? truncated : truncated.substring(0, lastSpaceIndex) + '...';
};

export const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};