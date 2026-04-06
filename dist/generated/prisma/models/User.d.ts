import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model User
 *
 */
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    createdAt: Date | null;
    password: string | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    createdAt: Date | null;
    password: string | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    name: number;
    createdAt: number;
    password: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    createdAt?: true;
    password?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    createdAt?: true;
    password?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    createdAt?: true;
    password?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    email: string;
    name: string;
    createdAt: Date;
    password: string;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    name?: Prisma.StringFilter<"User"> | string;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    password?: Prisma.StringFilter<"User"> | string;
    activities?: Prisma.ActivityLogListRelationFilter;
    files?: Prisma.FileListRelationFilter;
    membership?: Prisma.MembershipListRelationFilter;
    projects?: Prisma.ProjectListRelationFilter;
    assignedTasks?: Prisma.TaskListRelationFilter;
    createdTasks?: Prisma.TaskListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    activities?: Prisma.ActivityLogOrderByRelationAggregateInput;
    files?: Prisma.FileOrderByRelationAggregateInput;
    membership?: Prisma.MembershipOrderByRelationAggregateInput;
    projects?: Prisma.ProjectOrderByRelationAggregateInput;
    assignedTasks?: Prisma.TaskOrderByRelationAggregateInput;
    createdTasks?: Prisma.TaskOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringFilter<"User"> | string;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    password?: Prisma.StringFilter<"User"> | string;
    activities?: Prisma.ActivityLogListRelationFilter;
    files?: Prisma.FileListRelationFilter;
    membership?: Prisma.MembershipListRelationFilter;
    projects?: Prisma.ProjectListRelationFilter;
    assignedTasks?: Prisma.TaskListRelationFilter;
    createdTasks?: Prisma.TaskListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    password?: Prisma.StringWithAggregatesFilter<"User"> | string;
};
export type UserCreateInput = {
    id?: string;
    email: string;
    name: string;
    createdAt?: Date | string;
    password: string;
    activities?: Prisma.ActivityLogCreateNestedManyWithoutUserInput;
    files?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    membership?: Prisma.MembershipCreateNestedManyWithoutUserInput;
    projects?: Prisma.ProjectCreateNestedManyWithoutAuthorInput;
    assignedTasks?: Prisma.TaskCreateNestedManyWithoutAssigneeInput;
    createdTasks?: Prisma.TaskCreateNestedManyWithoutCreatorInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    name: string;
    createdAt?: Date | string;
    password: string;
    activities?: Prisma.ActivityLogUncheckedCreateNestedManyWithoutUserInput;
    files?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    membership?: Prisma.MembershipUncheckedCreateNestedManyWithoutUserInput;
    projects?: Prisma.ProjectUncheckedCreateNestedManyWithoutAuthorInput;
    assignedTasks?: Prisma.TaskUncheckedCreateNestedManyWithoutAssigneeInput;
    createdTasks?: Prisma.TaskUncheckedCreateNestedManyWithoutCreatorInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    activities?: Prisma.ActivityLogUpdateManyWithoutUserNestedInput;
    files?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    membership?: Prisma.MembershipUpdateManyWithoutUserNestedInput;
    projects?: Prisma.ProjectUpdateManyWithoutAuthorNestedInput;
    assignedTasks?: Prisma.TaskUpdateManyWithoutAssigneeNestedInput;
    createdTasks?: Prisma.TaskUpdateManyWithoutCreatorNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    activities?: Prisma.ActivityLogUncheckedUpdateManyWithoutUserNestedInput;
    files?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    membership?: Prisma.MembershipUncheckedUpdateManyWithoutUserNestedInput;
    projects?: Prisma.ProjectUncheckedUpdateManyWithoutAuthorNestedInput;
    assignedTasks?: Prisma.TaskUncheckedUpdateManyWithoutAssigneeNestedInput;
    createdTasks?: Prisma.TaskUncheckedUpdateManyWithoutCreatorNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    email: string;
    name: string;
    createdAt?: Date | string;
    password: string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutMembershipInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMembershipInput, Prisma.UserUncheckedCreateWithoutMembershipInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMembershipInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutMembershipNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMembershipInput, Prisma.UserUncheckedCreateWithoutMembershipInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMembershipInput;
    upsert?: Prisma.UserUpsertWithoutMembershipInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutMembershipInput, Prisma.UserUpdateWithoutMembershipInput>, Prisma.UserUncheckedUpdateWithoutMembershipInput>;
};
export type UserCreateNestedOneWithoutAssignedTasksInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAssignedTasksInput, Prisma.UserUncheckedCreateWithoutAssignedTasksInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAssignedTasksInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutCreatedTasksInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedTasksInput, Prisma.UserUncheckedCreateWithoutCreatedTasksInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedTasksInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneWithoutAssignedTasksNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAssignedTasksInput, Prisma.UserUncheckedCreateWithoutAssignedTasksInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAssignedTasksInput;
    upsert?: Prisma.UserUpsertWithoutAssignedTasksInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAssignedTasksInput, Prisma.UserUpdateWithoutAssignedTasksInput>, Prisma.UserUncheckedUpdateWithoutAssignedTasksInput>;
};
export type UserUpdateOneRequiredWithoutCreatedTasksNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCreatedTasksInput, Prisma.UserUncheckedCreateWithoutCreatedTasksInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCreatedTasksInput;
    upsert?: Prisma.UserUpsertWithoutCreatedTasksInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCreatedTasksInput, Prisma.UserUpdateWithoutCreatedTasksInput>, Prisma.UserUncheckedUpdateWithoutCreatedTasksInput>;
};
export type UserCreateNestedOneWithoutFilesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFilesInput, Prisma.UserUncheckedCreateWithoutFilesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFilesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutFilesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFilesInput, Prisma.UserUncheckedCreateWithoutFilesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFilesInput;
    upsert?: Prisma.UserUpsertWithoutFilesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutFilesInput, Prisma.UserUpdateWithoutFilesInput>, Prisma.UserUncheckedUpdateWithoutFilesInput>;
};
export type UserCreateNestedOneWithoutProjectsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProjectsInput, Prisma.UserUncheckedCreateWithoutProjectsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProjectsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutProjectsInput, Prisma.UserUncheckedCreateWithoutProjectsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutProjectsInput;
    upsert?: Prisma.UserUpsertWithoutProjectsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutProjectsInput, Prisma.UserUpdateWithoutProjectsInput>, Prisma.UserUncheckedUpdateWithoutProjectsInput>;
};
export type UserCreateNestedOneWithoutActivitiesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutActivitiesInput, Prisma.UserUncheckedCreateWithoutActivitiesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutActivitiesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutActivitiesInput, Prisma.UserUncheckedCreateWithoutActivitiesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutActivitiesInput;
    upsert?: Prisma.UserUpsertWithoutActivitiesInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutActivitiesInput, Prisma.UserUpdateWithoutActivitiesInput>, Prisma.UserUncheckedUpdateWithoutActivitiesInput>;
};
export type UserCreateWithoutMembershipInput = {
    id?: string;
    email: string;
    name: string;
    createdAt?: Date | string;
    password: string;
    activities?: Prisma.ActivityLogCreateNestedManyWithoutUserInput;
    files?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    projects?: Prisma.ProjectCreateNestedManyWithoutAuthorInput;
    assignedTasks?: Prisma.TaskCreateNestedManyWithoutAssigneeInput;
    createdTasks?: Prisma.TaskCreateNestedManyWithoutCreatorInput;
};
export type UserUncheckedCreateWithoutMembershipInput = {
    id?: string;
    email: string;
    name: string;
    createdAt?: Date | string;
    password: string;
    activities?: Prisma.ActivityLogUncheckedCreateNestedManyWithoutUserInput;
    files?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    projects?: Prisma.ProjectUncheckedCreateNestedManyWithoutAuthorInput;
    assignedTasks?: Prisma.TaskUncheckedCreateNestedManyWithoutAssigneeInput;
    createdTasks?: Prisma.TaskUncheckedCreateNestedManyWithoutCreatorInput;
};
export type UserCreateOrConnectWithoutMembershipInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutMembershipInput, Prisma.UserUncheckedCreateWithoutMembershipInput>;
};
export type UserUpsertWithoutMembershipInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutMembershipInput, Prisma.UserUncheckedUpdateWithoutMembershipInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutMembershipInput, Prisma.UserUncheckedCreateWithoutMembershipInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutMembershipInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutMembershipInput, Prisma.UserUncheckedUpdateWithoutMembershipInput>;
};
export type UserUpdateWithoutMembershipInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    activities?: Prisma.ActivityLogUpdateManyWithoutUserNestedInput;
    files?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    projects?: Prisma.ProjectUpdateManyWithoutAuthorNestedInput;
    assignedTasks?: Prisma.TaskUpdateManyWithoutAssigneeNestedInput;
    createdTasks?: Prisma.TaskUpdateManyWithoutCreatorNestedInput;
};
export type UserUncheckedUpdateWithoutMembershipInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    activities?: Prisma.ActivityLogUncheckedUpdateManyWithoutUserNestedInput;
    files?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    projects?: Prisma.ProjectUncheckedUpdateManyWithoutAuthorNestedInput;
    assignedTasks?: Prisma.TaskUncheckedUpdateManyWithoutAssigneeNestedInput;
    createdTasks?: Prisma.TaskUncheckedUpdateManyWithoutCreatorNestedInput;
};
export type UserCreateWithoutAssignedTasksInput = {
    id?: string;
    email: string;
    name: string;
    createdAt?: Date | string;
    password: string;
    activities?: Prisma.ActivityLogCreateNestedManyWithoutUserInput;
    files?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    membership?: Prisma.MembershipCreateNestedManyWithoutUserInput;
    projects?: Prisma.ProjectCreateNestedManyWithoutAuthorInput;
    createdTasks?: Prisma.TaskCreateNestedManyWithoutCreatorInput;
};
export type UserUncheckedCreateWithoutAssignedTasksInput = {
    id?: string;
    email: string;
    name: string;
    createdAt?: Date | string;
    password: string;
    activities?: Prisma.ActivityLogUncheckedCreateNestedManyWithoutUserInput;
    files?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    membership?: Prisma.MembershipUncheckedCreateNestedManyWithoutUserInput;
    projects?: Prisma.ProjectUncheckedCreateNestedManyWithoutAuthorInput;
    createdTasks?: Prisma.TaskUncheckedCreateNestedManyWithoutCreatorInput;
};
export type UserCreateOrConnectWithoutAssignedTasksInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAssignedTasksInput, Prisma.UserUncheckedCreateWithoutAssignedTasksInput>;
};
export type UserCreateWithoutCreatedTasksInput = {
    id?: string;
    email: string;
    name: string;
    createdAt?: Date | string;
    password: string;
    activities?: Prisma.ActivityLogCreateNestedManyWithoutUserInput;
    files?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    membership?: Prisma.MembershipCreateNestedManyWithoutUserInput;
    projects?: Prisma.ProjectCreateNestedManyWithoutAuthorInput;
    assignedTasks?: Prisma.TaskCreateNestedManyWithoutAssigneeInput;
};
export type UserUncheckedCreateWithoutCreatedTasksInput = {
    id?: string;
    email: string;
    name: string;
    createdAt?: Date | string;
    password: string;
    activities?: Prisma.ActivityLogUncheckedCreateNestedManyWithoutUserInput;
    files?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    membership?: Prisma.MembershipUncheckedCreateNestedManyWithoutUserInput;
    projects?: Prisma.ProjectUncheckedCreateNestedManyWithoutAuthorInput;
    assignedTasks?: Prisma.TaskUncheckedCreateNestedManyWithoutAssigneeInput;
};
export type UserCreateOrConnectWithoutCreatedTasksInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedTasksInput, Prisma.UserUncheckedCreateWithoutCreatedTasksInput>;
};
export type UserUpsertWithoutAssignedTasksInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAssignedTasksInput, Prisma.UserUncheckedUpdateWithoutAssignedTasksInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAssignedTasksInput, Prisma.UserUncheckedCreateWithoutAssignedTasksInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAssignedTasksInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAssignedTasksInput, Prisma.UserUncheckedUpdateWithoutAssignedTasksInput>;
};
export type UserUpdateWithoutAssignedTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    activities?: Prisma.ActivityLogUpdateManyWithoutUserNestedInput;
    files?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    membership?: Prisma.MembershipUpdateManyWithoutUserNestedInput;
    projects?: Prisma.ProjectUpdateManyWithoutAuthorNestedInput;
    createdTasks?: Prisma.TaskUpdateManyWithoutCreatorNestedInput;
};
export type UserUncheckedUpdateWithoutAssignedTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    activities?: Prisma.ActivityLogUncheckedUpdateManyWithoutUserNestedInput;
    files?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    membership?: Prisma.MembershipUncheckedUpdateManyWithoutUserNestedInput;
    projects?: Prisma.ProjectUncheckedUpdateManyWithoutAuthorNestedInput;
    createdTasks?: Prisma.TaskUncheckedUpdateManyWithoutCreatorNestedInput;
};
export type UserUpsertWithoutCreatedTasksInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCreatedTasksInput, Prisma.UserUncheckedUpdateWithoutCreatedTasksInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCreatedTasksInput, Prisma.UserUncheckedCreateWithoutCreatedTasksInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCreatedTasksInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCreatedTasksInput, Prisma.UserUncheckedUpdateWithoutCreatedTasksInput>;
};
export type UserUpdateWithoutCreatedTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    activities?: Prisma.ActivityLogUpdateManyWithoutUserNestedInput;
    files?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    membership?: Prisma.MembershipUpdateManyWithoutUserNestedInput;
    projects?: Prisma.ProjectUpdateManyWithoutAuthorNestedInput;
    assignedTasks?: Prisma.TaskUpdateManyWithoutAssigneeNestedInput;
};
export type UserUncheckedUpdateWithoutCreatedTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    activities?: Prisma.ActivityLogUncheckedUpdateManyWithoutUserNestedInput;
    files?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    membership?: Prisma.MembershipUncheckedUpdateManyWithoutUserNestedInput;
    projects?: Prisma.ProjectUncheckedUpdateManyWithoutAuthorNestedInput;
    assignedTasks?: Prisma.TaskUncheckedUpdateManyWithoutAssigneeNestedInput;
};
export type UserCreateWithoutFilesInput = {
    id?: string;
    email: string;
    name: string;
    createdAt?: Date | string;
    password: string;
    activities?: Prisma.ActivityLogCreateNestedManyWithoutUserInput;
    membership?: Prisma.MembershipCreateNestedManyWithoutUserInput;
    projects?: Prisma.ProjectCreateNestedManyWithoutAuthorInput;
    assignedTasks?: Prisma.TaskCreateNestedManyWithoutAssigneeInput;
    createdTasks?: Prisma.TaskCreateNestedManyWithoutCreatorInput;
};
export type UserUncheckedCreateWithoutFilesInput = {
    id?: string;
    email: string;
    name: string;
    createdAt?: Date | string;
    password: string;
    activities?: Prisma.ActivityLogUncheckedCreateNestedManyWithoutUserInput;
    membership?: Prisma.MembershipUncheckedCreateNestedManyWithoutUserInput;
    projects?: Prisma.ProjectUncheckedCreateNestedManyWithoutAuthorInput;
    assignedTasks?: Prisma.TaskUncheckedCreateNestedManyWithoutAssigneeInput;
    createdTasks?: Prisma.TaskUncheckedCreateNestedManyWithoutCreatorInput;
};
export type UserCreateOrConnectWithoutFilesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutFilesInput, Prisma.UserUncheckedCreateWithoutFilesInput>;
};
export type UserUpsertWithoutFilesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutFilesInput, Prisma.UserUncheckedUpdateWithoutFilesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutFilesInput, Prisma.UserUncheckedCreateWithoutFilesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutFilesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutFilesInput, Prisma.UserUncheckedUpdateWithoutFilesInput>;
};
export type UserUpdateWithoutFilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    activities?: Prisma.ActivityLogUpdateManyWithoutUserNestedInput;
    membership?: Prisma.MembershipUpdateManyWithoutUserNestedInput;
    projects?: Prisma.ProjectUpdateManyWithoutAuthorNestedInput;
    assignedTasks?: Prisma.TaskUpdateManyWithoutAssigneeNestedInput;
    createdTasks?: Prisma.TaskUpdateManyWithoutCreatorNestedInput;
};
export type UserUncheckedUpdateWithoutFilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    activities?: Prisma.ActivityLogUncheckedUpdateManyWithoutUserNestedInput;
    membership?: Prisma.MembershipUncheckedUpdateManyWithoutUserNestedInput;
    projects?: Prisma.ProjectUncheckedUpdateManyWithoutAuthorNestedInput;
    assignedTasks?: Prisma.TaskUncheckedUpdateManyWithoutAssigneeNestedInput;
    createdTasks?: Prisma.TaskUncheckedUpdateManyWithoutCreatorNestedInput;
};
export type UserCreateWithoutProjectsInput = {
    id?: string;
    email: string;
    name: string;
    createdAt?: Date | string;
    password: string;
    activities?: Prisma.ActivityLogCreateNestedManyWithoutUserInput;
    files?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    membership?: Prisma.MembershipCreateNestedManyWithoutUserInput;
    assignedTasks?: Prisma.TaskCreateNestedManyWithoutAssigneeInput;
    createdTasks?: Prisma.TaskCreateNestedManyWithoutCreatorInput;
};
export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string;
    email: string;
    name: string;
    createdAt?: Date | string;
    password: string;
    activities?: Prisma.ActivityLogUncheckedCreateNestedManyWithoutUserInput;
    files?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    membership?: Prisma.MembershipUncheckedCreateNestedManyWithoutUserInput;
    assignedTasks?: Prisma.TaskUncheckedCreateNestedManyWithoutAssigneeInput;
    createdTasks?: Prisma.TaskUncheckedCreateNestedManyWithoutCreatorInput;
};
export type UserCreateOrConnectWithoutProjectsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutProjectsInput, Prisma.UserUncheckedCreateWithoutProjectsInput>;
};
export type UserUpsertWithoutProjectsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutProjectsInput, Prisma.UserUncheckedUpdateWithoutProjectsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutProjectsInput, Prisma.UserUncheckedCreateWithoutProjectsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutProjectsInput, Prisma.UserUncheckedUpdateWithoutProjectsInput>;
};
export type UserUpdateWithoutProjectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    activities?: Prisma.ActivityLogUpdateManyWithoutUserNestedInput;
    files?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    membership?: Prisma.MembershipUpdateManyWithoutUserNestedInput;
    assignedTasks?: Prisma.TaskUpdateManyWithoutAssigneeNestedInput;
    createdTasks?: Prisma.TaskUpdateManyWithoutCreatorNestedInput;
};
export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    activities?: Prisma.ActivityLogUncheckedUpdateManyWithoutUserNestedInput;
    files?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    membership?: Prisma.MembershipUncheckedUpdateManyWithoutUserNestedInput;
    assignedTasks?: Prisma.TaskUncheckedUpdateManyWithoutAssigneeNestedInput;
    createdTasks?: Prisma.TaskUncheckedUpdateManyWithoutCreatorNestedInput;
};
export type UserCreateWithoutActivitiesInput = {
    id?: string;
    email: string;
    name: string;
    createdAt?: Date | string;
    password: string;
    files?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    membership?: Prisma.MembershipCreateNestedManyWithoutUserInput;
    projects?: Prisma.ProjectCreateNestedManyWithoutAuthorInput;
    assignedTasks?: Prisma.TaskCreateNestedManyWithoutAssigneeInput;
    createdTasks?: Prisma.TaskCreateNestedManyWithoutCreatorInput;
};
export type UserUncheckedCreateWithoutActivitiesInput = {
    id?: string;
    email: string;
    name: string;
    createdAt?: Date | string;
    password: string;
    files?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    membership?: Prisma.MembershipUncheckedCreateNestedManyWithoutUserInput;
    projects?: Prisma.ProjectUncheckedCreateNestedManyWithoutAuthorInput;
    assignedTasks?: Prisma.TaskUncheckedCreateNestedManyWithoutAssigneeInput;
    createdTasks?: Prisma.TaskUncheckedCreateNestedManyWithoutCreatorInput;
};
export type UserCreateOrConnectWithoutActivitiesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutActivitiesInput, Prisma.UserUncheckedCreateWithoutActivitiesInput>;
};
export type UserUpsertWithoutActivitiesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutActivitiesInput, Prisma.UserUncheckedUpdateWithoutActivitiesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutActivitiesInput, Prisma.UserUncheckedCreateWithoutActivitiesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutActivitiesInput, Prisma.UserUncheckedUpdateWithoutActivitiesInput>;
};
export type UserUpdateWithoutActivitiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    files?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    membership?: Prisma.MembershipUpdateManyWithoutUserNestedInput;
    projects?: Prisma.ProjectUpdateManyWithoutAuthorNestedInput;
    assignedTasks?: Prisma.TaskUpdateManyWithoutAssigneeNestedInput;
    createdTasks?: Prisma.TaskUpdateManyWithoutCreatorNestedInput;
};
export type UserUncheckedUpdateWithoutActivitiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    files?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    membership?: Prisma.MembershipUncheckedUpdateManyWithoutUserNestedInput;
    projects?: Prisma.ProjectUncheckedUpdateManyWithoutAuthorNestedInput;
    assignedTasks?: Prisma.TaskUncheckedUpdateManyWithoutAssigneeNestedInput;
    createdTasks?: Prisma.TaskUncheckedUpdateManyWithoutCreatorNestedInput;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    activities: number;
    files: number;
    membership: number;
    projects: number;
    assignedTasks: number;
    createdTasks: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    activities?: boolean | UserCountOutputTypeCountActivitiesArgs;
    files?: boolean | UserCountOutputTypeCountFilesArgs;
    membership?: boolean | UserCountOutputTypeCountMembershipArgs;
    projects?: boolean | UserCountOutputTypeCountProjectsArgs;
    assignedTasks?: boolean | UserCountOutputTypeCountAssignedTasksArgs;
    createdTasks?: boolean | UserCountOutputTypeCountCreatedTasksArgs;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountActivitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivityLogWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountFilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FileWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountMembershipArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MembershipWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountAssignedTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountCreatedTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    createdAt?: boolean;
    password?: boolean;
    activities?: boolean | Prisma.User$activitiesArgs<ExtArgs>;
    files?: boolean | Prisma.User$filesArgs<ExtArgs>;
    membership?: boolean | Prisma.User$membershipArgs<ExtArgs>;
    projects?: boolean | Prisma.User$projectsArgs<ExtArgs>;
    assignedTasks?: boolean | Prisma.User$assignedTasksArgs<ExtArgs>;
    createdTasks?: boolean | Prisma.User$createdTasksArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    createdAt?: boolean;
    password?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    createdAt?: boolean;
    password?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    name?: boolean;
    createdAt?: boolean;
    password?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "name" | "createdAt" | "password", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    activities?: boolean | Prisma.User$activitiesArgs<ExtArgs>;
    files?: boolean | Prisma.User$filesArgs<ExtArgs>;
    membership?: boolean | Prisma.User$membershipArgs<ExtArgs>;
    projects?: boolean | Prisma.User$projectsArgs<ExtArgs>;
    assignedTasks?: boolean | Prisma.User$assignedTasksArgs<ExtArgs>;
    createdTasks?: boolean | Prisma.User$createdTasksArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        activities: Prisma.$ActivityLogPayload<ExtArgs>[];
        files: Prisma.$FilePayload<ExtArgs>[];
        membership: Prisma.$MembershipPayload<ExtArgs>[];
        projects: Prisma.$ProjectPayload<ExtArgs>[];
        assignedTasks: Prisma.$TaskPayload<ExtArgs>[];
        createdTasks: Prisma.$TaskPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        name: string;
        createdAt: Date;
        password: string;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for User.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    activities<T extends Prisma.User$activitiesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    files<T extends Prisma.User$filesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$filesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    membership<T extends Prisma.User$membershipArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$membershipArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    projects<T extends Prisma.User$projectsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    assignedTasks<T extends Prisma.User$assignedTasksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$assignedTasksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    createdTasks<T extends Prisma.User$createdTasksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$createdTasksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the User model
 */
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
}
/**
 * User findUnique
 */
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findUniqueOrThrow
 */
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User findFirst
 */
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findFirstOrThrow
 */
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User findMany
 */
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: Prisma.UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: Prisma.UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * User create
 */
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
/**
 * User createMany
 */
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User createManyAndReturn
 */
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * User update
 */
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User updateMany
 */
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User updateManyAndReturn
 */
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
};
/**
 * User upsert
 */
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: Prisma.UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
/**
 * User delete
 */
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: Prisma.UserWhereUniqueInput;
};
/**
 * User deleteMany
 */
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: Prisma.UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
};
/**
 * User.activities
 */
export type User$activitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: Prisma.ActivityLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: Prisma.ActivityLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ActivityLogInclude<ExtArgs> | null;
    where?: Prisma.ActivityLogWhereInput;
    orderBy?: Prisma.ActivityLogOrderByWithRelationInput | Prisma.ActivityLogOrderByWithRelationInput[];
    cursor?: Prisma.ActivityLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActivityLogScalarFieldEnum | Prisma.ActivityLogScalarFieldEnum[];
};
/**
 * User.files
 */
export type User$filesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: Prisma.FileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the File
     */
    omit?: Prisma.FileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FileInclude<ExtArgs> | null;
    where?: Prisma.FileWhereInput;
    orderBy?: Prisma.FileOrderByWithRelationInput | Prisma.FileOrderByWithRelationInput[];
    cursor?: Prisma.FileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FileScalarFieldEnum | Prisma.FileScalarFieldEnum[];
};
/**
 * User.membership
 */
export type User$membershipArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Membership
     */
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Membership
     */
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    where?: Prisma.MembershipWhereInput;
    orderBy?: Prisma.MembershipOrderByWithRelationInput | Prisma.MembershipOrderByWithRelationInput[];
    cursor?: Prisma.MembershipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MembershipScalarFieldEnum | Prisma.MembershipScalarFieldEnum[];
};
/**
 * User.projects
 */
export type User$projectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Project
     */
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    where?: Prisma.ProjectWhereInput;
    orderBy?: Prisma.ProjectOrderByWithRelationInput | Prisma.ProjectOrderByWithRelationInput[];
    cursor?: Prisma.ProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectScalarFieldEnum | Prisma.ProjectScalarFieldEnum[];
};
/**
 * User.assignedTasks
 */
export type User$assignedTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: Prisma.TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
/**
 * User.createdTasks
 */
export type User$createdTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: Prisma.TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
/**
 * User without action
 */
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
