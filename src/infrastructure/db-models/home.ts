import {
  Model,
  Default,
  PrimaryKey,
  Column,
  AllowNull,
  Table,
  HasMany,
  ForeignKey
} from 'sequelize-typescript';
import { UUIDV4, STRING, NUMBER } from 'sequelize';
import { UserDataModel } from './user';
import { HomeImageDataModel } from './home-image';

@Table({ tableName: 'Home', timestamps: true, paranoid: true })
export class HomeDataModel extends Model {
  @HasMany(() => HomeDataModel)
  public homeImages: HomeImageDataModel[];

  @Default(UUIDV4)
  @PrimaryKey
  @Column
  public id: string;

  @Default(UUIDV4)
  @ForeignKey(() => UserDataModel)
  @Column
  public authorId: string;

  @AllowNull(false)
  @Column({ type: STRING })
  public name: string;

  @AllowNull(false)
  @Column({ type: NUMBER })
  public price: number;

  @AllowNull(false)
  @Column({ type: STRING })
  public address: string;

  @AllowNull(false)
  @Column({ type: NUMBER })
  public sqrFtSize: number;

  @AllowNull(false)
  @Column({ type: STRING })
  public description: string;

  public static fromDomain() {}

  public static toDomain() {}
}
