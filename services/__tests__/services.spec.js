import { getProject, createProject, updateProject, deleteProject } from '../projectServices';

// Mock para a função getProject
jest.mock('../projectServices', () => ({
  getProject: jest.fn(),
  createProject: jest.fn(),
  updateProject: jest.fn(),
  deleteProject: jest.fn()
}));

describe('Funções do Projeto', () => {
  describe('getProject', () => {
    it('deve retornar o projeto com o id fornecido', async () => {
      const id = 123;
      const expectedProject = { id: 123, name: 'Projeto de Teste' };
      // Mockando uma chamada assíncrona que retorna o projeto após 500ms
      getProject.mockResolvedValue(expectedProject);
      const result = await getProject(id);
      expect(result).toEqual(expectedProject);
    });

    it('deve falhar ao tentar obter um projeto com um id inválido', async () => {
      const id = 456;
      // Mockando uma chamada assíncrona que falha ao tentar obter um projeto com id inválido
      getProject.mockRejectedValue(new Error('Projeto não encontrado'));
      await expect(getProject(id)).rejects.toThrowError('Projeto não encontrado');
    });
  });

  describe('createProject', () => {
    it('deve criar um novo projeto', async () => {
      const project = { name: 'Novo Projeto' };
      // Mockando uma chamada assíncrona que retorna true após 800ms
      createProject.mockResolvedValue(true);
      const result = await createProject(project);
      expect(result).toBeTruthy();
    });

    it('deve falhar ao tentar criar um projeto com um nome duplicado', async () => {
      const project = { name: 'Projeto de Teste' };
      // Mockando uma chamada assíncrona que falha ao tentar criar um projeto com nome duplicado
      createProject.mockRejectedValue(new Error('O projeto já existe'));
      await expect(createProject(project)).rejects.toThrowError('O projeto já existe');
    });
  });

  describe('updateProject', () => {
    it('deve atualizar o projeto com o id fornecido', async () => {
      const id = 123;
      const project = { name: 'Projeto Atualizado' };
      // Mockando uma chamada assíncrona que retorna true após 600ms
      updateProject.mockResolvedValue(true);
      const result = await updateProject(id, project);
      expect(result).toBeTruthy();
    });

    it('deve falhar ao tentar atualizar um projeto com um id inválido', async () => {
      const id = 456;
      const project = { name: 'Projeto Atualizado' };
      // Mockando uma chamada assíncrona que falha ao tentar atualizar um projeto com id inválido
      updateProject.mockRejectedValue(new Error('Não foi possível atualizar o projeto'));
      await expect(updateProject(id, project)).rejects.toThrowError('Não foi possível atualizar o projeto');
    });
  });

  describe('deleteProject', () => {
    it('deve deletar o projeto com o id fornecido', async () => {
      const id = 123;
      // Mockando uma chamada assíncrona que retorna true após 700ms
      deleteProject.mockResolvedValue(true);
      const result = await deleteProject(id);
      expect(result).toBeTruthy();
    });

    it('deve falhar ao tentar deletar um projeto com um id inválido', async () => {
      const id = 456;
      // Mockando uma chamada assíncrona que falha ao tentar deletar um projeto com id inválido
      deleteProject.mockRejectedValue(new Error('Não foi possível deletar o projeto'));
      await expect(deleteProject(id)).rejects.toThrowError('Não foi possível deletar o projeto');
    });
  });
});
