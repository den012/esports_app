export function formatDate(date){
    if(!date) 
        return 'N/A';
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function formatTournamentPrize(prize){
    if(!prize)  
        return 'N/A';
    return new Intl.NumberFormat('en-Us', { style: 'currency', currency: 'USD' }).format(prize);
}