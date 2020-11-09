const {Model, DataTypes} = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = User;
/*

            // "Id_SERVIDOR_PORTAL": DataTypes.INTEGER,
            // "NOME": DataTypes.STRING,
            // "CPF": DataTypes.STRING,
            // "MATRICULA": DataTypes.STRING,
            // "DESCRICAO_CARGO": DataTypes.STRING,
            // "CLASSE_CARGO": DataTypes.STRING,
            // "REFERENCIA_CARGO": DataTypes.INTEGER,
            // "PADRAO_CARGO": DataTypes.STRING,
            // "NIVEL_CARGO": DataTypes.INTEGER,
            // "SIGLA_FUNCAO": DataTypes.STRING,
            // "NIVEL_FUNCAO": DataTypes.STRING,
            // "FUNCAO": DataTypes.STRING,
            // "CODIGO_ATIVIDADE" : DataTypes.INTEGER,
            // "ATIVIDADE": DataTypes.STRING,
            // "OPCAO_PARCIAL": DataTypes.STRING,
            // "COD_UORG_LOTACAO": DataTypes.INTEGER,
            // "UORG_LOTACAO": DataTypes.STRING,
            // "COD_ORG_LOTACAO": DataTypes.INTEGER,
            // "ORG_LOTACAO": DataTypes.STRING,
            // "COD_ORGSUP_LOTACAO": DataTypes.INTEGER,
            // "ORGSUP_LOTACAO": DataTypes.STRING,
            // "COD_UORG_EXERCICIO": DataTypes.INTEGER,
            // "UORG_EXERCICIO": DataTypes.STRING,
            // "COD_ORG_EXERCICIO": DataTypes.INTEGER,
            // "ORG_EXERCICIO": DataTypes.STRING,
            // "COD_ORGSUP_EXERCICIO": DataTypes.INTEGER,
            // "ORGSUP_EXERCICIO": DataTypes.STRING,
            // "TIPO_VINCULO": DataTypes.INTEGER,
            // "SITUACAO_VINCULO": DataTypes.STRING,
            // "DATA_INICIO_AFASTAMENTO": DataTypes.DATE,
            // "DATA_TERMINO_AFASTAMENTO": DataTypes.DATE,
            // "REGIME_JURIDICO": DataTypes.STRING,
            // "JORNADA_DE_TRABALHO": DataTypes.STRING,
            // "DATA_INGRESSO_CARGOFUNCAO": DataTypes.DATE,
            // "DATA_NOMEACAO_CARGOFUNCAO": DataTypes.DATE,
            // "DATA_INGRESSO_ORGAO": DataTypes.DATE,
            // "DOCUMENTO_INGRESSO_SERVICOPUBLICO": DataTypes.INTEGER,
            // "DATA_DIPLOMA_INGRESSO_SERVICOPUBLICO": DataTypes.DATE,
            // "DIPLOMA_INGRESSO_CARGOFUNCAO": DataTypes.STRING,
            // "DIPLOMA_INGRESSO_ORGAO": DataTypes.STRING,
            // "DIPLOMA_INGRESSO_SERVICOPUBLICO": DataTypes.STRING,
            // "UF_EXERCICIO": DataTypes.STRING,


*/
