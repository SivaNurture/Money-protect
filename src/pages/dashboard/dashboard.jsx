import { Badge, Chip, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import {
    CheckSuccessIcon,
    DollarWarningIcon,
    ExclamationDangerIcon,
    PageSuccessIcon,
    PlusBoxIcon,
} from "../../assets/SVG";
import FormSection from "../../components/form_section/form_section";
import AmountInfoCard from "../../components/info_card/amount_info_card";
import StyledPrimaryButton from "../../components/styled/styled_primary_btn";
import classes from "./dashboard.module.css";

const upComingPayments = [
    {
        accNo: 'Account Number',
        amount: 'AED 2000',
        paymentStatus: '',
        isOverdue: false,
    },
    {
        accNo: 'Account Number',
        amount: 'AED 2000',
        paymentStatus: '',
        isOverdue: true,
    },
    {
        accNo: 'Account Number',
        amount: 'AED 2000',
        paymentStatus: '',
        isOverdue: true,
    },
    {
        accNo: 'Account Number',
        amount: 'AED 2000',
        paymentStatus: '',
        isOverdue: true,
    },
    {
        accNo: 'Account Number',
        amount: 'AED 2000',
        paymentStatus: '',
        isOverdue: true,
    },
]

function Dashboard() {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div>
                    <h6>Good Morning Gary!</h6>
                    <h2>DashBoard</h2>
                </div>
                <div>
                    <StyledPrimaryButton>
                        {" "}
                        <PlusBoxIcon style={{ marginRight: "10px" }} /> New Application
                    </StyledPrimaryButton>
                </div>
            </div>
            <div className={classes.amountInfoCards}>
                <div>
                    <AmountInfoCard
                        icon={<CheckSuccessIcon />}
                        title="Paid"
                        amount="AED 2.56 M"
                    />
                </div>
                <div>
                    <AmountInfoCard
                        icon={<DollarWarningIcon />}
                        title="Remaining"
                        amount="AED 1.87 M"
                    />
                </div>
                <div>
                    <AmountInfoCard
                        icon={<ExclamationDangerIcon />}
                        title="Overdue"
                        amount="AED 34 K"
                    />
                </div>
                <div>
                    <AmountInfoCard
                        icon={<PageSuccessIcon />}
                        title="Total Due"
                        amount="AED 2.56 M"
                    />
                </div>
            </div>

            <div className={classes.detailSection}>
                <div>
                    <FormSection title="Money Earned" />
                </div>
                <div>
                    <FormSection
                        title="Upcoming Payments"
                        headerButton={{
                            title: (
                                <span>
                                    View All{" "}
                                    <svg
                                        width="13"
                                        height="10"
                                        viewBox="0 0 15 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.9453 6.34375C14.9453 6.60938 14.8359 6.875 14.6406 7.0625L9.51562 12.1875C9.30469 12.3906 9.07031 12.4844 8.82812 12.4844C8.26562 12.4844 7.86719 12.0859 7.86719 11.5625C7.86719 11.2734 7.98438 11.0391 8.16406 10.8672L9.91406 9.10156L11.9766 7.21875L10.2031 7.32031H0.992188C0.398438 7.32031 -0.0078125 6.92188 -0.0078125 6.34375C-0.0078125 5.76562 0.398438 5.36719 0.992188 5.36719H10.2031L11.9688 5.46875L9.91406 3.58594L8.16406 1.82031C7.98438 1.64062 7.86719 1.40625 7.86719 1.125C7.86719 0.59375 8.26562 0.195312 8.82812 0.195312C9.07031 0.195312 9.30469 0.296875 9.52344 0.515625L14.6406 5.625C14.8359 5.8125 14.9453 6.07812 14.9453 6.34375Z"
                                            fill="#DBA953"
                                        />
                                    </svg>
                                </span>
                            ),

                        }}
                    >
                        <Table size="small">
                            <TableHead sx={{ backgroundColor: 'var(--bg-grey)' }}>
                                <TableRow>
                                    <TableCell>Account No.</TableCell>
                                    <TableCell>Amount</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {upComingPayments.map((upComingPayment) => {
                                    return (
                                        <TableRow sx={{ backgroundColor: !upComingPayment.isOverdue && 'var(--primary-bg-color)' }}>
                                            <TableCell>{upComingPayment.accNo}</TableCell>
                                            <TableCell>{upComingPayment.amount}</TableCell>
                                            <TableCell>{upComingPayment.paymentStatus}</TableCell>
                                            <TableCell align="center">
                                                {upComingPayment.isOverdue ? (<Chip label="Over Due" variant="outlined" color="error" size="small" sx={{ margin: '4px 0' }} />) : (<StyledPrimaryButton variant="text">PayNow</StyledPrimaryButton>)}
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </FormSection>
                </div>
            </div>
            <div className={classes.activeLoanSection}>
                <h3>Active Loan Accounts</h3>
                <div className={classes.loanAccCards}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
