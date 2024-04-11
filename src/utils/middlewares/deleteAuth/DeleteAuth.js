import ProductsDBManager from "../../../dao/dbManagers/ProductsDBManager.js";
const ProdManager = new ProductsDBManager();

const DeleteAuth = async (pCod, role, id, res) => {
        if (!id)
            return res.status(401).json({ status: 'error', error: 'Unauthorized' });

        if (role == 'admin')
            {let deleteProd = await ProdManager.deleteProductByCode(pCod);
            
            return deleteProd;}
        
        if (role == 'premium'){
            let prodToDelete = await ProdManager.getProductByCode(pCod);
                if(prodToDelete.owner = id)
                {let deleteProd = await ProdManager.deleteProductByCode(pCod);
                return deleteProd;}}
                
                return res.status(401).json({ status: 'error', error: 'Unauthorized' });
            }


export default DeleteAuth