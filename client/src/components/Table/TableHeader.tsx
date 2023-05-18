import * as Styled from './Table.styles';

interface TableHeader {
    data: string[];
    hasSort?: boolean;
}

const TableHaeder = ({ data, hasSort = false}: TableHeader) => {
    const columnCount = Math.floor(data.length);
    
    return (
        <Styled.TableHaeder columns={columnCount} columnsPercentage={100/columnCount}>
            {data.map(item => 
                <Styled.Cell>
                    {item}
                    {hasSort && <Styled.Sort onClick={() => console.log('sort!')}>↑</Styled.Sort>}
                </Styled.Cell>
            )}
        </Styled.TableHaeder>
        
    );
}

export default TableHaeder; 