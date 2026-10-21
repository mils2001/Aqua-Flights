import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model FlightSchedule
 *
 */
export type FlightScheduleModel = runtime.Types.Result.DefaultSelection<Prisma.$FlightSchedulePayload>;
export type AggregateFlightSchedule = {
    _count: FlightScheduleCountAggregateOutputType | null;
    _avg: FlightScheduleAvgAggregateOutputType | null;
    _sum: FlightScheduleSumAggregateOutputType | null;
    _min: FlightScheduleMinAggregateOutputType | null;
    _max: FlightScheduleMaxAggregateOutputType | null;
};
export type FlightScheduleAvgAggregateOutputType = {
    id: number | null;
    flightId: number | null;
    availableSeats: number | null;
};
export type FlightScheduleSumAggregateOutputType = {
    id: number | null;
    flightId: number | null;
    availableSeats: number | null;
};
export type FlightScheduleMinAggregateOutputType = {
    id: number | null;
    flightId: number | null;
    departureDate: Date | null;
    departureTime: string | null;
    arrivalTime: string | null;
    availableSeats: number | null;
    status: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FlightScheduleMaxAggregateOutputType = {
    id: number | null;
    flightId: number | null;
    departureDate: Date | null;
    departureTime: string | null;
    arrivalTime: string | null;
    availableSeats: number | null;
    status: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FlightScheduleCountAggregateOutputType = {
    id: number;
    flightId: number;
    departureDate: number;
    departureTime: number;
    arrivalTime: number;
    availableSeats: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FlightScheduleAvgAggregateInputType = {
    id?: true;
    flightId?: true;
    availableSeats?: true;
};
export type FlightScheduleSumAggregateInputType = {
    id?: true;
    flightId?: true;
    availableSeats?: true;
};
export type FlightScheduleMinAggregateInputType = {
    id?: true;
    flightId?: true;
    departureDate?: true;
    departureTime?: true;
    arrivalTime?: true;
    availableSeats?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FlightScheduleMaxAggregateInputType = {
    id?: true;
    flightId?: true;
    departureDate?: true;
    departureTime?: true;
    arrivalTime?: true;
    availableSeats?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FlightScheduleCountAggregateInputType = {
    id?: true;
    flightId?: true;
    departureDate?: true;
    departureTime?: true;
    arrivalTime?: true;
    availableSeats?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FlightScheduleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FlightSchedule to aggregate.
     */
    where?: Prisma.FlightScheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FlightSchedules to fetch.
     */
    orderBy?: Prisma.FlightScheduleOrderByWithRelationInput | Prisma.FlightScheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.FlightScheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FlightSchedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FlightSchedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned FlightSchedules
    **/
    _count?: true | FlightScheduleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: FlightScheduleAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: FlightScheduleSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FlightScheduleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FlightScheduleMaxAggregateInputType;
};
export type GetFlightScheduleAggregateType<T extends FlightScheduleAggregateArgs> = {
    [P in keyof T & keyof AggregateFlightSchedule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFlightSchedule[P]> : Prisma.GetScalarType<T[P], AggregateFlightSchedule[P]>;
};
export type FlightScheduleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FlightScheduleWhereInput;
    orderBy?: Prisma.FlightScheduleOrderByWithAggregationInput | Prisma.FlightScheduleOrderByWithAggregationInput[];
    by: Prisma.FlightScheduleScalarFieldEnum[] | Prisma.FlightScheduleScalarFieldEnum;
    having?: Prisma.FlightScheduleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FlightScheduleCountAggregateInputType | true;
    _avg?: FlightScheduleAvgAggregateInputType;
    _sum?: FlightScheduleSumAggregateInputType;
    _min?: FlightScheduleMinAggregateInputType;
    _max?: FlightScheduleMaxAggregateInputType;
};
export type FlightScheduleGroupByOutputType = {
    id: number;
    flightId: number;
    departureDate: Date;
    departureTime: string;
    arrivalTime: string;
    availableSeats: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    _count: FlightScheduleCountAggregateOutputType | null;
    _avg: FlightScheduleAvgAggregateOutputType | null;
    _sum: FlightScheduleSumAggregateOutputType | null;
    _min: FlightScheduleMinAggregateOutputType | null;
    _max: FlightScheduleMaxAggregateOutputType | null;
};
export type GetFlightScheduleGroupByPayload<T extends FlightScheduleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FlightScheduleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FlightScheduleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FlightScheduleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FlightScheduleGroupByOutputType[P]>;
}>>;
export type FlightScheduleWhereInput = {
    AND?: Prisma.FlightScheduleWhereInput | Prisma.FlightScheduleWhereInput[];
    OR?: Prisma.FlightScheduleWhereInput[];
    NOT?: Prisma.FlightScheduleWhereInput | Prisma.FlightScheduleWhereInput[];
    id?: Prisma.IntFilter<"FlightSchedule"> | number;
    flightId?: Prisma.IntFilter<"FlightSchedule"> | number;
    departureDate?: Prisma.DateTimeFilter<"FlightSchedule"> | Date | string;
    departureTime?: Prisma.StringFilter<"FlightSchedule"> | string;
    arrivalTime?: Prisma.StringFilter<"FlightSchedule"> | string;
    availableSeats?: Prisma.IntFilter<"FlightSchedule"> | number;
    status?: Prisma.StringFilter<"FlightSchedule"> | string;
    createdAt?: Prisma.DateTimeFilter<"FlightSchedule"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FlightSchedule"> | Date | string;
    flight?: Prisma.XOR<Prisma.FlightScalarRelationFilter, Prisma.FlightWhereInput>;
    bookings?: Prisma.BookingListRelationFilter;
};
export type FlightScheduleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    flightId?: Prisma.SortOrder;
    departureDate?: Prisma.SortOrder;
    departureTime?: Prisma.SortOrder;
    arrivalTime?: Prisma.SortOrder;
    availableSeats?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    flight?: Prisma.FlightOrderByWithRelationInput;
    bookings?: Prisma.BookingOrderByRelationAggregateInput;
};
export type FlightScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    flightId_departureDate_departureTime?: Prisma.FlightScheduleFlightIdDepartureDateDepartureTimeCompoundUniqueInput;
    AND?: Prisma.FlightScheduleWhereInput | Prisma.FlightScheduleWhereInput[];
    OR?: Prisma.FlightScheduleWhereInput[];
    NOT?: Prisma.FlightScheduleWhereInput | Prisma.FlightScheduleWhereInput[];
    flightId?: Prisma.IntFilter<"FlightSchedule"> | number;
    departureDate?: Prisma.DateTimeFilter<"FlightSchedule"> | Date | string;
    departureTime?: Prisma.StringFilter<"FlightSchedule"> | string;
    arrivalTime?: Prisma.StringFilter<"FlightSchedule"> | string;
    availableSeats?: Prisma.IntFilter<"FlightSchedule"> | number;
    status?: Prisma.StringFilter<"FlightSchedule"> | string;
    createdAt?: Prisma.DateTimeFilter<"FlightSchedule"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FlightSchedule"> | Date | string;
    flight?: Prisma.XOR<Prisma.FlightScalarRelationFilter, Prisma.FlightWhereInput>;
    bookings?: Prisma.BookingListRelationFilter;
}, "id" | "flightId_departureDate_departureTime">;
export type FlightScheduleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    flightId?: Prisma.SortOrder;
    departureDate?: Prisma.SortOrder;
    departureTime?: Prisma.SortOrder;
    arrivalTime?: Prisma.SortOrder;
    availableSeats?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FlightScheduleCountOrderByAggregateInput;
    _avg?: Prisma.FlightScheduleAvgOrderByAggregateInput;
    _max?: Prisma.FlightScheduleMaxOrderByAggregateInput;
    _min?: Prisma.FlightScheduleMinOrderByAggregateInput;
    _sum?: Prisma.FlightScheduleSumOrderByAggregateInput;
};
export type FlightScheduleScalarWhereWithAggregatesInput = {
    AND?: Prisma.FlightScheduleScalarWhereWithAggregatesInput | Prisma.FlightScheduleScalarWhereWithAggregatesInput[];
    OR?: Prisma.FlightScheduleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FlightScheduleScalarWhereWithAggregatesInput | Prisma.FlightScheduleScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"FlightSchedule"> | number;
    flightId?: Prisma.IntWithAggregatesFilter<"FlightSchedule"> | number;
    departureDate?: Prisma.DateTimeWithAggregatesFilter<"FlightSchedule"> | Date | string;
    departureTime?: Prisma.StringWithAggregatesFilter<"FlightSchedule"> | string;
    arrivalTime?: Prisma.StringWithAggregatesFilter<"FlightSchedule"> | string;
    availableSeats?: Prisma.IntWithAggregatesFilter<"FlightSchedule"> | number;
    status?: Prisma.StringWithAggregatesFilter<"FlightSchedule"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FlightSchedule"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"FlightSchedule"> | Date | string;
};
export type FlightScheduleCreateInput = {
    departureDate: Date | string;
    departureTime: string;
    arrivalTime: string;
    availableSeats: number;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    flight: Prisma.FlightCreateNestedOneWithoutSchedulesInput;
    bookings?: Prisma.BookingCreateNestedManyWithoutScheduleInput;
};
export type FlightScheduleUncheckedCreateInput = {
    id?: number;
    flightId: number;
    departureDate: Date | string;
    departureTime: string;
    arrivalTime: string;
    availableSeats: number;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bookings?: Prisma.BookingUncheckedCreateNestedManyWithoutScheduleInput;
};
export type FlightScheduleUpdateInput = {
    departureDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    departureTime?: Prisma.StringFieldUpdateOperationsInput | string;
    arrivalTime?: Prisma.StringFieldUpdateOperationsInput | string;
    availableSeats?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    flight?: Prisma.FlightUpdateOneRequiredWithoutSchedulesNestedInput;
    bookings?: Prisma.BookingUpdateManyWithoutScheduleNestedInput;
};
export type FlightScheduleUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    flightId?: Prisma.IntFieldUpdateOperationsInput | number;
    departureDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    departureTime?: Prisma.StringFieldUpdateOperationsInput | string;
    arrivalTime?: Prisma.StringFieldUpdateOperationsInput | string;
    availableSeats?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.BookingUncheckedUpdateManyWithoutScheduleNestedInput;
};
export type FlightScheduleCreateManyInput = {
    id?: number;
    flightId: number;
    departureDate: Date | string;
    departureTime: string;
    arrivalTime: string;
    availableSeats: number;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FlightScheduleUpdateManyMutationInput = {
    departureDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    departureTime?: Prisma.StringFieldUpdateOperationsInput | string;
    arrivalTime?: Prisma.StringFieldUpdateOperationsInput | string;
    availableSeats?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FlightScheduleUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    flightId?: Prisma.IntFieldUpdateOperationsInput | number;
    departureDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    departureTime?: Prisma.StringFieldUpdateOperationsInput | string;
    arrivalTime?: Prisma.StringFieldUpdateOperationsInput | string;
    availableSeats?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FlightScheduleListRelationFilter = {
    every?: Prisma.FlightScheduleWhereInput;
    some?: Prisma.FlightScheduleWhereInput;
    none?: Prisma.FlightScheduleWhereInput;
};
export type FlightScheduleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FlightScheduleFlightIdDepartureDateDepartureTimeCompoundUniqueInput = {
    flightId: number;
    departureDate: Date | string;
    departureTime: string;
};
export type FlightScheduleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    flightId?: Prisma.SortOrder;
    departureDate?: Prisma.SortOrder;
    departureTime?: Prisma.SortOrder;
    arrivalTime?: Prisma.SortOrder;
    availableSeats?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FlightScheduleAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    flightId?: Prisma.SortOrder;
    availableSeats?: Prisma.SortOrder;
};
export type FlightScheduleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    flightId?: Prisma.SortOrder;
    departureDate?: Prisma.SortOrder;
    departureTime?: Prisma.SortOrder;
    arrivalTime?: Prisma.SortOrder;
    availableSeats?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FlightScheduleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    flightId?: Prisma.SortOrder;
    departureDate?: Prisma.SortOrder;
    departureTime?: Prisma.SortOrder;
    arrivalTime?: Prisma.SortOrder;
    availableSeats?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FlightScheduleSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    flightId?: Prisma.SortOrder;
    availableSeats?: Prisma.SortOrder;
};
export type FlightScheduleScalarRelationFilter = {
    is?: Prisma.FlightScheduleWhereInput;
    isNot?: Prisma.FlightScheduleWhereInput;
};
export type FlightScheduleCreateNestedManyWithoutFlightInput = {
    create?: Prisma.XOR<Prisma.FlightScheduleCreateWithoutFlightInput, Prisma.FlightScheduleUncheckedCreateWithoutFlightInput> | Prisma.FlightScheduleCreateWithoutFlightInput[] | Prisma.FlightScheduleUncheckedCreateWithoutFlightInput[];
    connectOrCreate?: Prisma.FlightScheduleCreateOrConnectWithoutFlightInput | Prisma.FlightScheduleCreateOrConnectWithoutFlightInput[];
    createMany?: Prisma.FlightScheduleCreateManyFlightInputEnvelope;
    connect?: Prisma.FlightScheduleWhereUniqueInput | Prisma.FlightScheduleWhereUniqueInput[];
};
export type FlightScheduleUncheckedCreateNestedManyWithoutFlightInput = {
    create?: Prisma.XOR<Prisma.FlightScheduleCreateWithoutFlightInput, Prisma.FlightScheduleUncheckedCreateWithoutFlightInput> | Prisma.FlightScheduleCreateWithoutFlightInput[] | Prisma.FlightScheduleUncheckedCreateWithoutFlightInput[];
    connectOrCreate?: Prisma.FlightScheduleCreateOrConnectWithoutFlightInput | Prisma.FlightScheduleCreateOrConnectWithoutFlightInput[];
    createMany?: Prisma.FlightScheduleCreateManyFlightInputEnvelope;
    connect?: Prisma.FlightScheduleWhereUniqueInput | Prisma.FlightScheduleWhereUniqueInput[];
};
export type FlightScheduleUpdateManyWithoutFlightNestedInput = {
    create?: Prisma.XOR<Prisma.FlightScheduleCreateWithoutFlightInput, Prisma.FlightScheduleUncheckedCreateWithoutFlightInput> | Prisma.FlightScheduleCreateWithoutFlightInput[] | Prisma.FlightScheduleUncheckedCreateWithoutFlightInput[];
    connectOrCreate?: Prisma.FlightScheduleCreateOrConnectWithoutFlightInput | Prisma.FlightScheduleCreateOrConnectWithoutFlightInput[];
    upsert?: Prisma.FlightScheduleUpsertWithWhereUniqueWithoutFlightInput | Prisma.FlightScheduleUpsertWithWhereUniqueWithoutFlightInput[];
    createMany?: Prisma.FlightScheduleCreateManyFlightInputEnvelope;
    set?: Prisma.FlightScheduleWhereUniqueInput | Prisma.FlightScheduleWhereUniqueInput[];
    disconnect?: Prisma.FlightScheduleWhereUniqueInput | Prisma.FlightScheduleWhereUniqueInput[];
    delete?: Prisma.FlightScheduleWhereUniqueInput | Prisma.FlightScheduleWhereUniqueInput[];
    connect?: Prisma.FlightScheduleWhereUniqueInput | Prisma.FlightScheduleWhereUniqueInput[];
    update?: Prisma.FlightScheduleUpdateWithWhereUniqueWithoutFlightInput | Prisma.FlightScheduleUpdateWithWhereUniqueWithoutFlightInput[];
    updateMany?: Prisma.FlightScheduleUpdateManyWithWhereWithoutFlightInput | Prisma.FlightScheduleUpdateManyWithWhereWithoutFlightInput[];
    deleteMany?: Prisma.FlightScheduleScalarWhereInput | Prisma.FlightScheduleScalarWhereInput[];
};
export type FlightScheduleUncheckedUpdateManyWithoutFlightNestedInput = {
    create?: Prisma.XOR<Prisma.FlightScheduleCreateWithoutFlightInput, Prisma.FlightScheduleUncheckedCreateWithoutFlightInput> | Prisma.FlightScheduleCreateWithoutFlightInput[] | Prisma.FlightScheduleUncheckedCreateWithoutFlightInput[];
    connectOrCreate?: Prisma.FlightScheduleCreateOrConnectWithoutFlightInput | Prisma.FlightScheduleCreateOrConnectWithoutFlightInput[];
    upsert?: Prisma.FlightScheduleUpsertWithWhereUniqueWithoutFlightInput | Prisma.FlightScheduleUpsertWithWhereUniqueWithoutFlightInput[];
    createMany?: Prisma.FlightScheduleCreateManyFlightInputEnvelope;
    set?: Prisma.FlightScheduleWhereUniqueInput | Prisma.FlightScheduleWhereUniqueInput[];
    disconnect?: Prisma.FlightScheduleWhereUniqueInput | Prisma.FlightScheduleWhereUniqueInput[];
    delete?: Prisma.FlightScheduleWhereUniqueInput | Prisma.FlightScheduleWhereUniqueInput[];
    connect?: Prisma.FlightScheduleWhereUniqueInput | Prisma.FlightScheduleWhereUniqueInput[];
    update?: Prisma.FlightScheduleUpdateWithWhereUniqueWithoutFlightInput | Prisma.FlightScheduleUpdateWithWhereUniqueWithoutFlightInput[];
    updateMany?: Prisma.FlightScheduleUpdateManyWithWhereWithoutFlightInput | Prisma.FlightScheduleUpdateManyWithWhereWithoutFlightInput[];
    deleteMany?: Prisma.FlightScheduleScalarWhereInput | Prisma.FlightScheduleScalarWhereInput[];
};
export type FlightScheduleCreateNestedOneWithoutBookingsInput = {
    create?: Prisma.XOR<Prisma.FlightScheduleCreateWithoutBookingsInput, Prisma.FlightScheduleUncheckedCreateWithoutBookingsInput>;
    connectOrCreate?: Prisma.FlightScheduleCreateOrConnectWithoutBookingsInput;
    connect?: Prisma.FlightScheduleWhereUniqueInput;
};
export type FlightScheduleUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: Prisma.XOR<Prisma.FlightScheduleCreateWithoutBookingsInput, Prisma.FlightScheduleUncheckedCreateWithoutBookingsInput>;
    connectOrCreate?: Prisma.FlightScheduleCreateOrConnectWithoutBookingsInput;
    upsert?: Prisma.FlightScheduleUpsertWithoutBookingsInput;
    connect?: Prisma.FlightScheduleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FlightScheduleUpdateToOneWithWhereWithoutBookingsInput, Prisma.FlightScheduleUpdateWithoutBookingsInput>, Prisma.FlightScheduleUncheckedUpdateWithoutBookingsInput>;
};
export type FlightScheduleCreateWithoutFlightInput = {
    departureDate: Date | string;
    departureTime: string;
    arrivalTime: string;
    availableSeats: number;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bookings?: Prisma.BookingCreateNestedManyWithoutScheduleInput;
};
export type FlightScheduleUncheckedCreateWithoutFlightInput = {
    id?: number;
    departureDate: Date | string;
    departureTime: string;
    arrivalTime: string;
    availableSeats: number;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bookings?: Prisma.BookingUncheckedCreateNestedManyWithoutScheduleInput;
};
export type FlightScheduleCreateOrConnectWithoutFlightInput = {
    where: Prisma.FlightScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.FlightScheduleCreateWithoutFlightInput, Prisma.FlightScheduleUncheckedCreateWithoutFlightInput>;
};
export type FlightScheduleCreateManyFlightInputEnvelope = {
    data: Prisma.FlightScheduleCreateManyFlightInput | Prisma.FlightScheduleCreateManyFlightInput[];
};
export type FlightScheduleUpsertWithWhereUniqueWithoutFlightInput = {
    where: Prisma.FlightScheduleWhereUniqueInput;
    update: Prisma.XOR<Prisma.FlightScheduleUpdateWithoutFlightInput, Prisma.FlightScheduleUncheckedUpdateWithoutFlightInput>;
    create: Prisma.XOR<Prisma.FlightScheduleCreateWithoutFlightInput, Prisma.FlightScheduleUncheckedCreateWithoutFlightInput>;
};
export type FlightScheduleUpdateWithWhereUniqueWithoutFlightInput = {
    where: Prisma.FlightScheduleWhereUniqueInput;
    data: Prisma.XOR<Prisma.FlightScheduleUpdateWithoutFlightInput, Prisma.FlightScheduleUncheckedUpdateWithoutFlightInput>;
};
export type FlightScheduleUpdateManyWithWhereWithoutFlightInput = {
    where: Prisma.FlightScheduleScalarWhereInput;
    data: Prisma.XOR<Prisma.FlightScheduleUpdateManyMutationInput, Prisma.FlightScheduleUncheckedUpdateManyWithoutFlightInput>;
};
export type FlightScheduleScalarWhereInput = {
    AND?: Prisma.FlightScheduleScalarWhereInput | Prisma.FlightScheduleScalarWhereInput[];
    OR?: Prisma.FlightScheduleScalarWhereInput[];
    NOT?: Prisma.FlightScheduleScalarWhereInput | Prisma.FlightScheduleScalarWhereInput[];
    id?: Prisma.IntFilter<"FlightSchedule"> | number;
    flightId?: Prisma.IntFilter<"FlightSchedule"> | number;
    departureDate?: Prisma.DateTimeFilter<"FlightSchedule"> | Date | string;
    departureTime?: Prisma.StringFilter<"FlightSchedule"> | string;
    arrivalTime?: Prisma.StringFilter<"FlightSchedule"> | string;
    availableSeats?: Prisma.IntFilter<"FlightSchedule"> | number;
    status?: Prisma.StringFilter<"FlightSchedule"> | string;
    createdAt?: Prisma.DateTimeFilter<"FlightSchedule"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FlightSchedule"> | Date | string;
};
export type FlightScheduleCreateWithoutBookingsInput = {
    departureDate: Date | string;
    departureTime: string;
    arrivalTime: string;
    availableSeats: number;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    flight: Prisma.FlightCreateNestedOneWithoutSchedulesInput;
};
export type FlightScheduleUncheckedCreateWithoutBookingsInput = {
    id?: number;
    flightId: number;
    departureDate: Date | string;
    departureTime: string;
    arrivalTime: string;
    availableSeats: number;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FlightScheduleCreateOrConnectWithoutBookingsInput = {
    where: Prisma.FlightScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.FlightScheduleCreateWithoutBookingsInput, Prisma.FlightScheduleUncheckedCreateWithoutBookingsInput>;
};
export type FlightScheduleUpsertWithoutBookingsInput = {
    update: Prisma.XOR<Prisma.FlightScheduleUpdateWithoutBookingsInput, Prisma.FlightScheduleUncheckedUpdateWithoutBookingsInput>;
    create: Prisma.XOR<Prisma.FlightScheduleCreateWithoutBookingsInput, Prisma.FlightScheduleUncheckedCreateWithoutBookingsInput>;
    where?: Prisma.FlightScheduleWhereInput;
};
export type FlightScheduleUpdateToOneWithWhereWithoutBookingsInput = {
    where?: Prisma.FlightScheduleWhereInput;
    data: Prisma.XOR<Prisma.FlightScheduleUpdateWithoutBookingsInput, Prisma.FlightScheduleUncheckedUpdateWithoutBookingsInput>;
};
export type FlightScheduleUpdateWithoutBookingsInput = {
    departureDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    departureTime?: Prisma.StringFieldUpdateOperationsInput | string;
    arrivalTime?: Prisma.StringFieldUpdateOperationsInput | string;
    availableSeats?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    flight?: Prisma.FlightUpdateOneRequiredWithoutSchedulesNestedInput;
};
export type FlightScheduleUncheckedUpdateWithoutBookingsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    flightId?: Prisma.IntFieldUpdateOperationsInput | number;
    departureDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    departureTime?: Prisma.StringFieldUpdateOperationsInput | string;
    arrivalTime?: Prisma.StringFieldUpdateOperationsInput | string;
    availableSeats?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FlightScheduleCreateManyFlightInput = {
    id?: number;
    departureDate: Date | string;
    departureTime: string;
    arrivalTime: string;
    availableSeats: number;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FlightScheduleUpdateWithoutFlightInput = {
    departureDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    departureTime?: Prisma.StringFieldUpdateOperationsInput | string;
    arrivalTime?: Prisma.StringFieldUpdateOperationsInput | string;
    availableSeats?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.BookingUpdateManyWithoutScheduleNestedInput;
};
export type FlightScheduleUncheckedUpdateWithoutFlightInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    departureDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    departureTime?: Prisma.StringFieldUpdateOperationsInput | string;
    arrivalTime?: Prisma.StringFieldUpdateOperationsInput | string;
    availableSeats?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.BookingUncheckedUpdateManyWithoutScheduleNestedInput;
};
export type FlightScheduleUncheckedUpdateManyWithoutFlightInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    departureDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    departureTime?: Prisma.StringFieldUpdateOperationsInput | string;
    arrivalTime?: Prisma.StringFieldUpdateOperationsInput | string;
    availableSeats?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type FlightScheduleCountOutputType
 */
export type FlightScheduleCountOutputType = {
    bookings: number;
};
export type FlightScheduleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bookings?: boolean | FlightScheduleCountOutputTypeCountBookingsArgs;
};
/**
 * FlightScheduleCountOutputType without action
 */
export type FlightScheduleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightScheduleCountOutputType
     */
    select?: Prisma.FlightScheduleCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * FlightScheduleCountOutputType without action
 */
export type FlightScheduleCountOutputTypeCountBookingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookingWhereInput;
};
export type FlightScheduleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    flightId?: boolean;
    departureDate?: boolean;
    departureTime?: boolean;
    arrivalTime?: boolean;
    availableSeats?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    flight?: boolean | Prisma.FlightDefaultArgs<ExtArgs>;
    bookings?: boolean | Prisma.FlightSchedule$bookingsArgs<ExtArgs>;
    _count?: boolean | Prisma.FlightScheduleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["flightSchedule"]>;
export type FlightScheduleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    flightId?: boolean;
    departureDate?: boolean;
    departureTime?: boolean;
    arrivalTime?: boolean;
    availableSeats?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    flight?: boolean | Prisma.FlightDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["flightSchedule"]>;
export type FlightScheduleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    flightId?: boolean;
    departureDate?: boolean;
    departureTime?: boolean;
    arrivalTime?: boolean;
    availableSeats?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    flight?: boolean | Prisma.FlightDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["flightSchedule"]>;
export type FlightScheduleSelectScalar = {
    id?: boolean;
    flightId?: boolean;
    departureDate?: boolean;
    departureTime?: boolean;
    arrivalTime?: boolean;
    availableSeats?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FlightScheduleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "flightId" | "departureDate" | "departureTime" | "arrivalTime" | "availableSeats" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["flightSchedule"]>;
export type FlightScheduleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    flight?: boolean | Prisma.FlightDefaultArgs<ExtArgs>;
    bookings?: boolean | Prisma.FlightSchedule$bookingsArgs<ExtArgs>;
    _count?: boolean | Prisma.FlightScheduleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type FlightScheduleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    flight?: boolean | Prisma.FlightDefaultArgs<ExtArgs>;
};
export type FlightScheduleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    flight?: boolean | Prisma.FlightDefaultArgs<ExtArgs>;
};
export type $FlightSchedulePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FlightSchedule";
    objects: {
        flight: Prisma.$FlightPayload<ExtArgs>;
        bookings: Prisma.$BookingPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        flightId: number;
        departureDate: Date;
        departureTime: string;
        arrivalTime: string;
        availableSeats: number;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["flightSchedule"]>;
    composites: {};
};
export type FlightScheduleGetPayload<S extends boolean | null | undefined | FlightScheduleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FlightSchedulePayload, S>;
export type FlightScheduleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FlightScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FlightScheduleCountAggregateInputType | true;
};
export interface FlightScheduleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FlightSchedule'];
        meta: {
            name: 'FlightSchedule';
        };
    };
    /**
     * Find zero or one FlightSchedule that matches the filter.
     * @param {FlightScheduleFindUniqueArgs} args - Arguments to find a FlightSchedule
     * @example
     * // Get one FlightSchedule
     * const flightSchedule = await prisma.flightSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlightScheduleFindUniqueArgs>(args: Prisma.SelectSubset<T, FlightScheduleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FlightScheduleClient<runtime.Types.Result.GetResult<Prisma.$FlightSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one FlightSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlightScheduleFindUniqueOrThrowArgs} args - Arguments to find a FlightSchedule
     * @example
     * // Get one FlightSchedule
     * const flightSchedule = await prisma.flightSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlightScheduleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FlightScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FlightScheduleClient<runtime.Types.Result.GetResult<Prisma.$FlightSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FlightSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightScheduleFindFirstArgs} args - Arguments to find a FlightSchedule
     * @example
     * // Get one FlightSchedule
     * const flightSchedule = await prisma.flightSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlightScheduleFindFirstArgs>(args?: Prisma.SelectSubset<T, FlightScheduleFindFirstArgs<ExtArgs>>): Prisma.Prisma__FlightScheduleClient<runtime.Types.Result.GetResult<Prisma.$FlightSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FlightSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightScheduleFindFirstOrThrowArgs} args - Arguments to find a FlightSchedule
     * @example
     * // Get one FlightSchedule
     * const flightSchedule = await prisma.flightSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlightScheduleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FlightScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FlightScheduleClient<runtime.Types.Result.GetResult<Prisma.$FlightSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more FlightSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlightSchedules
     * const flightSchedules = await prisma.flightSchedule.findMany()
     *
     * // Get first 10 FlightSchedules
     * const flightSchedules = await prisma.flightSchedule.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const flightScheduleWithIdOnly = await prisma.flightSchedule.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FlightScheduleFindManyArgs>(args?: Prisma.SelectSubset<T, FlightScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FlightSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a FlightSchedule.
     * @param {FlightScheduleCreateArgs} args - Arguments to create a FlightSchedule.
     * @example
     * // Create one FlightSchedule
     * const FlightSchedule = await prisma.flightSchedule.create({
     *   data: {
     *     // ... data to create a FlightSchedule
     *   }
     * })
     *
     */
    create<T extends FlightScheduleCreateArgs>(args: Prisma.SelectSubset<T, FlightScheduleCreateArgs<ExtArgs>>): Prisma.Prisma__FlightScheduleClient<runtime.Types.Result.GetResult<Prisma.$FlightSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many FlightSchedules.
     * @param {FlightScheduleCreateManyArgs} args - Arguments to create many FlightSchedules.
     * @example
     * // Create many FlightSchedules
     * const flightSchedule = await prisma.flightSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FlightScheduleCreateManyArgs>(args?: Prisma.SelectSubset<T, FlightScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many FlightSchedules and returns the data saved in the database.
     * @param {FlightScheduleCreateManyAndReturnArgs} args - Arguments to create many FlightSchedules.
     * @example
     * // Create many FlightSchedules
     * const flightSchedule = await prisma.flightSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many FlightSchedules and only return the `id`
     * const flightScheduleWithIdOnly = await prisma.flightSchedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FlightScheduleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FlightScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FlightSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a FlightSchedule.
     * @param {FlightScheduleDeleteArgs} args - Arguments to delete one FlightSchedule.
     * @example
     * // Delete one FlightSchedule
     * const FlightSchedule = await prisma.flightSchedule.delete({
     *   where: {
     *     // ... filter to delete one FlightSchedule
     *   }
     * })
     *
     */
    delete<T extends FlightScheduleDeleteArgs>(args: Prisma.SelectSubset<T, FlightScheduleDeleteArgs<ExtArgs>>): Prisma.Prisma__FlightScheduleClient<runtime.Types.Result.GetResult<Prisma.$FlightSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one FlightSchedule.
     * @param {FlightScheduleUpdateArgs} args - Arguments to update one FlightSchedule.
     * @example
     * // Update one FlightSchedule
     * const flightSchedule = await prisma.flightSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FlightScheduleUpdateArgs>(args: Prisma.SelectSubset<T, FlightScheduleUpdateArgs<ExtArgs>>): Prisma.Prisma__FlightScheduleClient<runtime.Types.Result.GetResult<Prisma.$FlightSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more FlightSchedules.
     * @param {FlightScheduleDeleteManyArgs} args - Arguments to filter FlightSchedules to delete.
     * @example
     * // Delete a few FlightSchedules
     * const { count } = await prisma.flightSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FlightScheduleDeleteManyArgs>(args?: Prisma.SelectSubset<T, FlightScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FlightSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlightSchedules
     * const flightSchedule = await prisma.flightSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FlightScheduleUpdateManyArgs>(args: Prisma.SelectSubset<T, FlightScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FlightSchedules and returns the data updated in the database.
     * @param {FlightScheduleUpdateManyAndReturnArgs} args - Arguments to update many FlightSchedules.
     * @example
     * // Update many FlightSchedules
     * const flightSchedule = await prisma.flightSchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more FlightSchedules and only return the `id`
     * const flightScheduleWithIdOnly = await prisma.flightSchedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends FlightScheduleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FlightScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FlightSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one FlightSchedule.
     * @param {FlightScheduleUpsertArgs} args - Arguments to update or create a FlightSchedule.
     * @example
     * // Update or create a FlightSchedule
     * const flightSchedule = await prisma.flightSchedule.upsert({
     *   create: {
     *     // ... data to create a FlightSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlightSchedule we want to update
     *   }
     * })
     */
    upsert<T extends FlightScheduleUpsertArgs>(args: Prisma.SelectSubset<T, FlightScheduleUpsertArgs<ExtArgs>>): Prisma.Prisma__FlightScheduleClient<runtime.Types.Result.GetResult<Prisma.$FlightSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of FlightSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightScheduleCountArgs} args - Arguments to filter FlightSchedules to count.
     * @example
     * // Count the number of FlightSchedules
     * const count = await prisma.flightSchedule.count({
     *   where: {
     *     // ... the filter for the FlightSchedules we want to count
     *   }
     * })
    **/
    count<T extends FlightScheduleCountArgs>(args?: Prisma.Subset<T, FlightScheduleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FlightScheduleCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a FlightSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlightScheduleAggregateArgs>(args: Prisma.Subset<T, FlightScheduleAggregateArgs>): Prisma.PrismaPromise<GetFlightScheduleAggregateType<T>>;
    /**
     * Group by FlightSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends FlightScheduleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FlightScheduleGroupByArgs['orderBy'];
    } : {
        orderBy?: FlightScheduleGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FlightScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlightScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the FlightSchedule model
     */
    readonly fields: FlightScheduleFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for FlightSchedule.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__FlightScheduleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    flight<T extends Prisma.FlightDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FlightDefaultArgs<ExtArgs>>): Prisma.Prisma__FlightClient<runtime.Types.Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    bookings<T extends Prisma.FlightSchedule$bookingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FlightSchedule$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the FlightSchedule model
 */
export interface FlightScheduleFieldRefs {
    readonly id: Prisma.FieldRef<"FlightSchedule", 'Int'>;
    readonly flightId: Prisma.FieldRef<"FlightSchedule", 'Int'>;
    readonly departureDate: Prisma.FieldRef<"FlightSchedule", 'DateTime'>;
    readonly departureTime: Prisma.FieldRef<"FlightSchedule", 'String'>;
    readonly arrivalTime: Prisma.FieldRef<"FlightSchedule", 'String'>;
    readonly availableSeats: Prisma.FieldRef<"FlightSchedule", 'Int'>;
    readonly status: Prisma.FieldRef<"FlightSchedule", 'String'>;
    readonly createdAt: Prisma.FieldRef<"FlightSchedule", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"FlightSchedule", 'DateTime'>;
}
/**
 * FlightSchedule findUnique
 */
export type FlightScheduleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightSchedule
     */
    select?: Prisma.FlightScheduleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FlightSchedule
     */
    omit?: Prisma.FlightScheduleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FlightScheduleInclude<ExtArgs> | null;
    /**
     * Filter, which FlightSchedule to fetch.
     */
    where: Prisma.FlightScheduleWhereUniqueInput;
};
/**
 * FlightSchedule findUniqueOrThrow
 */
export type FlightScheduleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightSchedule
     */
    select?: Prisma.FlightScheduleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FlightSchedule
     */
    omit?: Prisma.FlightScheduleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FlightScheduleInclude<ExtArgs> | null;
    /**
     * Filter, which FlightSchedule to fetch.
     */
    where: Prisma.FlightScheduleWhereUniqueInput;
};
/**
 * FlightSchedule findFirst
 */
export type FlightScheduleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightSchedule
     */
    select?: Prisma.FlightScheduleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FlightSchedule
     */
    omit?: Prisma.FlightScheduleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FlightScheduleInclude<ExtArgs> | null;
    /**
     * Filter, which FlightSchedule to fetch.
     */
    where?: Prisma.FlightScheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FlightSchedules to fetch.
     */
    orderBy?: Prisma.FlightScheduleOrderByWithRelationInput | Prisma.FlightScheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FlightSchedules.
     */
    cursor?: Prisma.FlightScheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FlightSchedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FlightSchedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FlightSchedules.
     */
    distinct?: Prisma.FlightScheduleScalarFieldEnum | Prisma.FlightScheduleScalarFieldEnum[];
};
/**
 * FlightSchedule findFirstOrThrow
 */
export type FlightScheduleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightSchedule
     */
    select?: Prisma.FlightScheduleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FlightSchedule
     */
    omit?: Prisma.FlightScheduleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FlightScheduleInclude<ExtArgs> | null;
    /**
     * Filter, which FlightSchedule to fetch.
     */
    where?: Prisma.FlightScheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FlightSchedules to fetch.
     */
    orderBy?: Prisma.FlightScheduleOrderByWithRelationInput | Prisma.FlightScheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FlightSchedules.
     */
    cursor?: Prisma.FlightScheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FlightSchedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FlightSchedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FlightSchedules.
     */
    distinct?: Prisma.FlightScheduleScalarFieldEnum | Prisma.FlightScheduleScalarFieldEnum[];
};
/**
 * FlightSchedule findMany
 */
export type FlightScheduleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightSchedule
     */
    select?: Prisma.FlightScheduleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FlightSchedule
     */
    omit?: Prisma.FlightScheduleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FlightScheduleInclude<ExtArgs> | null;
    /**
     * Filter, which FlightSchedules to fetch.
     */
    where?: Prisma.FlightScheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FlightSchedules to fetch.
     */
    orderBy?: Prisma.FlightScheduleOrderByWithRelationInput | Prisma.FlightScheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing FlightSchedules.
     */
    cursor?: Prisma.FlightScheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FlightSchedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FlightSchedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FlightSchedules.
     */
    distinct?: Prisma.FlightScheduleScalarFieldEnum | Prisma.FlightScheduleScalarFieldEnum[];
};
/**
 * FlightSchedule create
 */
export type FlightScheduleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightSchedule
     */
    select?: Prisma.FlightScheduleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FlightSchedule
     */
    omit?: Prisma.FlightScheduleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FlightScheduleInclude<ExtArgs> | null;
    /**
     * The data needed to create a FlightSchedule.
     */
    data: Prisma.XOR<Prisma.FlightScheduleCreateInput, Prisma.FlightScheduleUncheckedCreateInput>;
};
/**
 * FlightSchedule createMany
 */
export type FlightScheduleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlightSchedules.
     */
    data: Prisma.FlightScheduleCreateManyInput | Prisma.FlightScheduleCreateManyInput[];
};
/**
 * FlightSchedule createManyAndReturn
 */
export type FlightScheduleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightSchedule
     */
    select?: Prisma.FlightScheduleSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FlightSchedule
     */
    omit?: Prisma.FlightScheduleOmit<ExtArgs> | null;
    /**
     * The data used to create many FlightSchedules.
     */
    data: Prisma.FlightScheduleCreateManyInput | Prisma.FlightScheduleCreateManyInput[];
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FlightScheduleIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * FlightSchedule update
 */
export type FlightScheduleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightSchedule
     */
    select?: Prisma.FlightScheduleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FlightSchedule
     */
    omit?: Prisma.FlightScheduleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FlightScheduleInclude<ExtArgs> | null;
    /**
     * The data needed to update a FlightSchedule.
     */
    data: Prisma.XOR<Prisma.FlightScheduleUpdateInput, Prisma.FlightScheduleUncheckedUpdateInput>;
    /**
     * Choose, which FlightSchedule to update.
     */
    where: Prisma.FlightScheduleWhereUniqueInput;
};
/**
 * FlightSchedule updateMany
 */
export type FlightScheduleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update FlightSchedules.
     */
    data: Prisma.XOR<Prisma.FlightScheduleUpdateManyMutationInput, Prisma.FlightScheduleUncheckedUpdateManyInput>;
    /**
     * Filter which FlightSchedules to update
     */
    where?: Prisma.FlightScheduleWhereInput;
    /**
     * Limit how many FlightSchedules to update.
     */
    limit?: number;
};
/**
 * FlightSchedule updateManyAndReturn
 */
export type FlightScheduleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightSchedule
     */
    select?: Prisma.FlightScheduleSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FlightSchedule
     */
    omit?: Prisma.FlightScheduleOmit<ExtArgs> | null;
    /**
     * The data used to update FlightSchedules.
     */
    data: Prisma.XOR<Prisma.FlightScheduleUpdateManyMutationInput, Prisma.FlightScheduleUncheckedUpdateManyInput>;
    /**
     * Filter which FlightSchedules to update
     */
    where?: Prisma.FlightScheduleWhereInput;
    /**
     * Limit how many FlightSchedules to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FlightScheduleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * FlightSchedule upsert
 */
export type FlightScheduleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightSchedule
     */
    select?: Prisma.FlightScheduleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FlightSchedule
     */
    omit?: Prisma.FlightScheduleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FlightScheduleInclude<ExtArgs> | null;
    /**
     * The filter to search for the FlightSchedule to update in case it exists.
     */
    where: Prisma.FlightScheduleWhereUniqueInput;
    /**
     * In case the FlightSchedule found by the `where` argument doesn't exist, create a new FlightSchedule with this data.
     */
    create: Prisma.XOR<Prisma.FlightScheduleCreateInput, Prisma.FlightScheduleUncheckedCreateInput>;
    /**
     * In case the FlightSchedule was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.FlightScheduleUpdateInput, Prisma.FlightScheduleUncheckedUpdateInput>;
};
/**
 * FlightSchedule delete
 */
export type FlightScheduleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightSchedule
     */
    select?: Prisma.FlightScheduleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FlightSchedule
     */
    omit?: Prisma.FlightScheduleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FlightScheduleInclude<ExtArgs> | null;
    /**
     * Filter which FlightSchedule to delete.
     */
    where: Prisma.FlightScheduleWhereUniqueInput;
};
/**
 * FlightSchedule deleteMany
 */
export type FlightScheduleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FlightSchedules to delete
     */
    where?: Prisma.FlightScheduleWhereInput;
    /**
     * Limit how many FlightSchedules to delete.
     */
    limit?: number;
};
/**
 * FlightSchedule.bookings
 */
export type FlightSchedule$bookingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: Prisma.BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: Prisma.BookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.BookingInclude<ExtArgs> | null;
    where?: Prisma.BookingWhereInput;
    orderBy?: Prisma.BookingOrderByWithRelationInput | Prisma.BookingOrderByWithRelationInput[];
    cursor?: Prisma.BookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookingScalarFieldEnum | Prisma.BookingScalarFieldEnum[];
};
/**
 * FlightSchedule without action
 */
export type FlightScheduleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightSchedule
     */
    select?: Prisma.FlightScheduleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FlightSchedule
     */
    omit?: Prisma.FlightScheduleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FlightScheduleInclude<ExtArgs> | null;
};
//# sourceMappingURL=FlightSchedule.d.ts.map