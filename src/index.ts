/**Index Signatures */

class SeatAssignment{
    // A1, A2, ... seats
    // Ibrahim, Mahmud, ..... customer name
    [seatNumber: string]: string;   // A1 => 'Ibrahim
}

let seats = new SeatAssignment();
seats.A1 = 'Ibrahim';
// or
seats['A2'] = 'Mahmud';