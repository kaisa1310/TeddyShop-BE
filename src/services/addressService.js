import Address from '~/models/addressModel'

const createAddress = async (addressData) => {
  return await Address.create(addressData)
}

const getAddressByUserId = async (userId) => {
  return await Address.find({ userId: userId })
}

const getAddressById = async (addressId) => {
  return await Address.findById(addressId)
}

const updateAddress = async (addressId, addressData) => {
  return await Address.findByIdAndUpdate(addressId, addressData, { new: true })
}

const deleteAddress = async (addressId) => {
  return await Address.findByIdAndDelete(addressId)
}

export const addressService = {
  createAddress,
  getAddressById,
  getAddressByUserId,
  updateAddress,
  deleteAddress
}
