import keys from './keys'
import oracledb from 'oracledb'

function db2(){

    var connection = {
        execwocallback : async function(queryEst:string, params:oracledb.BindParameters,callback: Function){
            oracledb.getConnection(keys.database, function(err, connection){
                if(err){
                    console.log('Connection error');
                    console.error(err.message);
                    callback();
                }

                connection.execute(queryEst, params,{
                    outFormat: oracledb.OBJECT,
                    autoCommit: true,
                     
                },
                function(err,result){
                    if(err){
                        console.log(err.message);
                        doRelease(connection);
                    }
                    else{
                        doRelease(connection);
                    }
                });

                function doRelease(connection:oracledb.Connection){
                    connection.release(
                        function(err){
                            if(err){
                                console.error(err.message);
                            }
                        }
                    );
                }
            })
        },

        exec : async function(queryEst:string,params:oracledb.BindParameters, callback:Function){
            oracledb.getConnection(keys.database,function(err,connection){
                if(err){
                    console.log('Connection error2');
                    console.error(err.message);
                    callback();
                }

                connection.execute(queryEst,params,{
                    outFormat:oracledb.OBJECT,
                    autoCommit:true
                },
                function(err,result){
                    if(err){
                        console.error(err.message);
                        doRelease(connection);
                        callback(err);
                    }
                    else{
                        var res = result.rows;
                        doRelease(connection);
                        callback(res);
                    }
                });
            });

            function doRelease(connection:oracledb.Connection){
                connection.release(
                    function(err){
                        if(err){console.error(err.message);}
                    }
                );
            }
        }
    }
    return connection;
}

export default {db2:db2};