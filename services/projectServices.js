// Função para obter um projeto com o id fornecido
export async function getProject(id) {
    // Simulando uma chamada assíncrona a um serviço externo para obter o projeto
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulando uma situação em que o projeto não é encontrado
        if (id !== 123) {
          reject(new Error('Projeto não encontrado'));
        } else {
          // Supondo que o projeto seja recuperado com sucesso após 500ms
          resolve({ id, name: 'Projeto de Teste' });
        }
      }, 500);
    });
  }
  
  // Função para criar um novo projeto
  export async function createProject(project) {
    // Simulando uma chamada assíncrona a um serviço externo para criar o projeto
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulando uma situação em que o projeto já existe
        if (project.name === 'Projeto de Teste') {
          reject(new Error('O projeto já existe'));
        } else {
          // Supondo que o projeto seja criado com sucesso após 800ms
          resolve(true); // Retorna true para indicar que o projeto foi criado com sucesso
        }
      }, 800);
    });
  }
  
  // Função para atualizar um projeto com o id fornecido
  export async function updateProject(id, project) {
    // Simulando uma chamada assíncrona a um serviço externo para atualizar o projeto
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulando uma situação em que o projeto não pode ser atualizado
        if (id !== 123) {
          reject(new Error('Não foi possível atualizar o projeto'));
        } else {
          // Supondo que o projeto seja atualizado com sucesso após 600ms
          resolve(true); // Retorna true para indicar que o projeto foi atualizado com sucesso
        }
      }, 600);
    });
  }
  
  // Função para deletar um projeto com o id fornecido
  export async function deleteProject(id) {
    // Simulando uma chamada assíncrona a um serviço externo para deletar o projeto
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulando uma situação em que o projeto não pode ser deletado
        if (id !== 123) {
          reject(new Error('Não foi possível deletar o projeto'));
        } else {
          // Supondo que o projeto seja deletado com sucesso após 700ms
          resolve(true); // Retorna true para indicar que o projeto foi deletado com sucesso
        }
      }, 700);
    });
  }
  