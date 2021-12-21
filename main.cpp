#include <iostream>

int max(int col, int row) // 1
{
    return col > row ? col : row;
}

int rotateX(int col, int middle) // 1
{
    return middle - (col - (middle + 1));
}

int rotateY(int row, int middle) // 1
{
    return middle - (row - (middle + 1));
}

int valueOf(int col, int row)
{
    int rowStart = 0, colStart = 0, rowEnd, colEnd;

    if (col == row)
    {
        return 0;
    }
    else
    {
        int i = 2;
        while (i < max(col, row))
        {
            i *= 2;
        }
        rowEnd = i - 1;
        colEnd = i - 1;

        if (row == 1 || col == colEnd + 1)
        {
            return col - row;
        }
        else if (col == 1 || row == rowEnd + 1)
        {
            return row - col;
        }
        else
        {
            while (i > 2)
            {
                if (col > colEnd / 2 + 1)
                {
                    col = rotateX(col, (colStart + colEnd + 1) / 2);
                    row = rotateY(row, (rowStart + rowEnd + 1) / 2);
                }

                if (row > (rowEnd + rowStart) / 2 + 1)
                {
                    rowStart = (rowEnd + rowStart + 1) / 2;
                    colEnd = colEnd / 2;
                }
                else
                {
                    rowEnd = ((rowEnd + rowStart) / 2);
                    colEnd = colEnd / 2;
                }

                i /= 2;
            }
            if (col % 2 == row % 2)
            {
                return max(rowStart, colStart);
            }
            else
            {
                return max(rowEnd, colEnd);
            }
        }
    }
}

int main(int argc, char const *argv[])
{
    int col, row;
    std::cout << "Enter 2 random column and row position: " << std::endl;
    std::cout << "Column: ";
    std::cin >> col;
    std::cout << "Row: ";
    std::cin >> row;
    std::cout << "The value at the column " << col << " and row " << row << " is " << valueOf(col, row) << std::endl;
    return 0;
}
