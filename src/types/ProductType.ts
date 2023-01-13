export interface ProductType {
  _id: string,
  name: string,
  category: string
  quantity: number,
  status: 'ACTIVE' | 'INACTIVE',
  created_at: Date,
  updated_at: Date,
  deleted_at: Date
}
