import { autor } from "../models/Autor.js";

class AutorController {

    static async listarAutores (req, res) {
        try {
            const listarAutores = await autor.find({});
            res.status(200).json(listarAutores);
        }    catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }  
    }

    static async listarAutoresPorId (req, res) {
        try {
            const id = req.params.id;
            const listarAutores = await autor.findById(id);
            res.status(200).json(listarAutores);
        }   catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do autor` });
        }  
    }


    static async cadastrarAutor (req, res) {
        try {
            const novoautor = await autor.create(req.body)
            res.status(201).json({ message: "criado com sucesso", autor: novoautor });
        }   catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar autor` });
        }
    }

    static async atualizarAutor (req, res) {
        try {
          const id = req.params.id;
          await autor.findByIdAndUpdate(id, req.body);
          res.status(200).json({ message: "autor atualizado" });
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha na atualização` });
        }
      };

    static async deletarAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: "autor deletado com sucesso" });
        }   catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao deletar o autor` });
        }  
    }

};

export default AutorController;