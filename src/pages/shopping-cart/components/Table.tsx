import {
  Box,
  IconButton,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { ReactNode } from 'react';

import CrossIcon from '@/icons/outlined-cross.svg?react';
import EditIcon from '@/icons/outlined-edit.svg?react';

import ProductImage from '@/images/cart/product-image-1.jpg';

type Product = {
  price: string;
  image: string;
  description: string;
};
type Row = {
  id: string;
  product: Product;
  qty: number;
  subtotal: string;
};

type Column = {
  id: 'item' | 'price' | 'qty' | 'subtotal' | 'actions';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
};

const columns: readonly Column[] = [
  { id: 'item', label: 'Item', minWidth: 170 },
  {
    id: 'price',
    label: 'Price',
    minWidth: 100,
    format: (value: number) =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(value),
  },
  {
    id: 'qty',
    label: 'Qty',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toString(),
  },
  {
    id: 'subtotal',
    label: 'Subtotal',
    minWidth: 170,
    align: 'right',
    format: (value: number) =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(value),
  },
  {
    id: 'actions',
    label: '',
    minWidth: 70,
    align: 'right',
  },
];

const rows: Row[] = [
  {
    id: crypto.randomUUID(),
    qty: 1,
    subtotal: '2100',
    product: {
      image: ProductImage,
      price: '2100',
      description:
        'MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty',
    },
  },
  {
    id: crypto.randomUUID(),
    qty: 12,
    subtotal: '8640',
    product: {
      image: ProductImage,
      price: '720',
      description:
        'MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty',
    },
  },
  {
    id: crypto.randomUUID(),
    qty: 3,
    subtotal: '360',
    product: {
      image: ProductImage,
      price: '120',
      description:
        'MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty',
    },
  },
];

const Cells: {
  [key in Column['id']]: (row: Row, column: Column) => ReactNode;
} = {
  item: (item) => (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <img src={item.product.image} alt={item.product.description} width={80} />
      <Typography variant="subtitle2">{item.product.description}</Typography>
    </Box>
  ),
  price: (item, { format }) => (
    <Typography variant="body2" fontWeight={600}>
      {format ? format(+item.product.price) : item.product.price}
    </Typography>
  ),
  qty: (item) => (
    <Typography variant="subtitle2" fontWeight={600}>
      {item.qty}
    </Typography>
  ),
  subtotal: (item, { format }) => (
    <Typography variant="subtitle2" fontWeight={600}>
      {format ? format(+item.subtotal) : item.subtotal}
    </Typography>
  ),
  actions: (item) => (
    <Box>
      <IconButton
        onClick={() => {
          console.log(item);
        }}
      >
        <SvgIcon component={CrossIcon} inheritViewBox />
      </IconButton>
      <IconButton>
        <SvgIcon component={EditIcon} inheritViewBox />
      </IconButton>
    </Box>
  ),
};

const ShoppingCartTable = () => {
  //   const [page, setPage] = useState(0);
  //   const [rowsPerPage, setRowsPerPage] = useState(10);

  //   const handleChangePage = (event: unknown, newPage: number) => {
  //     setPage(newPage);
  //   };

  //   const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
  //     setRowsPerPage(+event.target.value);
  //     setPage(0);
  //   };

  return (
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                <Typography variant="subtitle2" fontWeight={600}>
                  {column.label}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                {columns.map((column) => {
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {Cells[column.id](row, column)}
                    </TableCell>
                  );
                })}
                {/* <TableCell>
                  <IconButton
                    onClick={() => {
                      console.log(row);
                    }}
                  >
                    <SvgIcon component={CrossIcon} inheritViewBox />
                  </IconButton>
                  <IconButton>
                    <SvgIcon component={EditIcon} inheritViewBox />
                  </IconButton>
                </TableCell> */}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { ShoppingCartTable };
