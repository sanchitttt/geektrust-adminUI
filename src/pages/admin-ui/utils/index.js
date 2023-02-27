/**
 * @function searchQueryFn
 * @param {String} searchQuery 
 * @param {Array{}} data 
 * @param {Setter} setViewableData 
 * @param {Setter} setTotalPages 
 */
export function searchQueryFn(searchQuery, data, setViewableData, setTotalPages) {
    if (searchQuery.length) {
        const filtered = data.filter((item) => {
            const { name, email, role } = item;
            const regex = new RegExp(searchQuery, 'gi');
            if (name.match(regex) || email.match(regex) || role.match(regex)) {
                return item;
            }
        })

        setViewableData([...filtered].slice(0, 10))
        setTotalPages(Math.ceil(filtered.length / 10));
    }
    else {
        setViewableData([...data].slice(0, 10))
        setTotalPages(Math.ceil(data.length / 10));
    }
}

/**
 * @function updateUIAndPagination
 * @param {Array{}} newData 
 * @param {Setter} setData
 * @param {Setter} setTotalPages
 */

export function updateUIAndPaginationOnDelete(newData, setData, setTotalPages) {
    setData([...newData]);
    setTotalPages(Math.ceil(newData.length / 10));
}