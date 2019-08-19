import { ReservationDocument } from '../../db/model';
import { UserRepository } from '../../db/repository/user-repository';
import { SlotRepository } from '../../db/repository/slot-repository';
import { ServiceRepository } from '../../db/repository/service-repository';

export const prepareReservationDocument = async (reservation: ReservationDocument) => {
    const user = await UserRepository.findById(reservation.user).then();
    const slot =  await SlotRepository.findById(reservation.slot).then();
    const service = await ServiceRepository.findById(reservation.service).then();
    return {
        id: reservation.id,
        user,
        slot,
        service
    };
};
